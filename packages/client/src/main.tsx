import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/app/App'
import { createStore } from './app/providers/store/config/store'
import { UserMapper } from './mappers/User'

const initialState = window.initialState

delete window.initialState

const initialStateParce = JSON.parse(initialState) as InitialState
  
const store = createStore({
  user: UserMapper.toView(initialStateParce.user),
  auth: initialStateParce.auth,
})



ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <App store={store} />
)