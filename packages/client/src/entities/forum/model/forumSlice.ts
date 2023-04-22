import { createSlice } from '@reduxjs/toolkit'

interface Topic {
  id: number
  title: string
  description: string
}

interface ForumSlice {
  forumList: Array<Topic>
}

const initialState: ForumSlice = {
  forumList: [
    //Временная заглушка
    {
      id: 1,
      title: 'Форум о здоровье',
      description: 'Обсуждаем все что касается здоровья игроков',
    },
    {
      id: 2,
      title: 'Форум о мотоциклах',
      description: 'Мотоциклы и все такое',
    },
    {
      id: 3,
      title: 'Форум о программировании',
      description: 'Обсуждаем айтишные мемы',
    },
    {
      id: 4,
      title: 'Форум о программировании',
      description: 'Обсуждаем айтишные мемы',
    },
  ],
}

export const appSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {},
})

export const { reducer } = appSlice
