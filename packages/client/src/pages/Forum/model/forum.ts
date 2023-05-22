import {createEvent, createStore, createEffect, sample, forward} from 'effector'
import {createGate} from 'effector-react'
import axios from 'axios';
import { BASE_API_URL } from '@/services/api'

//gate страницы форума
export const ForumGate = createGate<void>("forum")

//Эвент создания форума
export const onCreateForum = createEvent<string>("Создание форума")
//Эвент удаление форума
export const onDeleteForum = createEvent<string>("Удаление Форума")

//запрос списка форумов
export const fxFetchForums = createEffect(async () => {
  const response = await axios.get(`${BASE_API_URL}/topics`);
  return response.data
});

//Запрос удаления форума
export const FxDeleteForums = createEffect(async (id: string) => {
  const response = await axios.delete (`${BASE_API_URL}/topics/${id}`);
  return response.data
});

//Запрос удаления форума
export const FxCreateForums = createEffect(async (forumData) => {
  const response = await axios.post(`${BASE_API_URL}/topics`, forumData);
  return response.data
});


//Стор для списка форумов
export const $forumTopics = createStore([])

//Запрос списка форумов при открытии страницы форумов
sample({
  clock: [ForumGate.open, FxDeleteForums.doneData, FxCreateForums.doneData],
  target: fxFetchForums
})

//Положить данные запроса в стор со списком форумов
sample({
  clock: fxFetchForums.doneData,
  target: $forumTopics
})

//Удаление форума
forward({
  from: onDeleteForum,
  to: FxDeleteForums
})

//Создание форума
forward({
  from: onCreateForum,
  to: FxCreateForums
})


