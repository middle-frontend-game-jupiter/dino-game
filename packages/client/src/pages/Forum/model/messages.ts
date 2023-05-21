import { createGate } from 'effector-react'
import { createEffect, createEvent, createStore, forward, sample } from 'effector'
import axios from 'axios'


//gate страницы сообщений
export const ForumMessagesGate = createGate<void>("forumMessages")

//Эвент добавления сообщения
export const onCreateMessage = createEvent<string>("Создание форума Форума")

export const fxGetMessagesByForum = createEffect(async (forumId) => {
  try {
    const response = await axios.get(`http://localhost:3001/topics/${forumId}/messages`); // Замените '/topics/:id/messages' на ваш эндпоинт для получения сообщений по конкретному форуму
    return response.data; // Возвращаем полученные данные, если необходимо
  } catch (error) {
    console.error('Ошибка при получении сообщений по форуму:', error);
    throw error; // Если произошла ошибка, выбрасываем ее
  }
});

export const fxNewMessage = createEffect(async ({forumId, user, message }) => {
  try {
    const response = await axios.post(`http://localhost:3001/topics/${forumId}/messages`, {user, message});
    return response.data; // Возвращаем полученные данные, если необходимо
  } catch (error) {
    console.error('Ошибка при получении сообщений по форуму:', error);
    throw error; // Если произошла ошибка, выбрасываем ее
  }
});

//Стор для списка сообщений
export const $forumMessages = createStore([])
//Стор для ид форума
export const $forumId = createStore(null)

sample({
  clock: ForumMessagesGate.open,
  target: $forumId
})

//Запрос списка сообщений при открытии страницы сообщений
sample({
  clock: [ForumMessagesGate.open, fxNewMessage.doneData],
  source: $forumId,
  fn: (id) => id,
  target: fxGetMessagesByForum
})



//Положить список сообщений в стор
sample({
  clock: fxGetMessagesByForum.doneData,
  target: $forumMessages
})

//Создание форума
forward({
  from: onCreateMessage,
  to: fxNewMessage
})
