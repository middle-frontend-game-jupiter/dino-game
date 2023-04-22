import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@/app/providers/store/config/store'

export const getSelectedForum = (
  state: RootState,
  props: { forumId: number }
) => state.forum?.forumList.find(item => item.id === props.forumId)

export const getForumList = createSelector(
  (state: RootState) => state,
  state => state?.forum.forumList
)
