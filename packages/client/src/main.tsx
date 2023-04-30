import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { createStore } from '@/app/providers/store/config/store'
import { ErrorBoundary } from '@/app/providers/errorBoundary'
import { Router } from './app/hocs/AppRouter'
import { AppStore } from './app/hocs/AppStore'

const root = document.getElementById('root') as HTMLElement;

const store = createStore()

ReactDOM.hydrateRoot(
  root,
  <ErrorBoundary>
    <AppStore store={store}>
      <Router>
        <App />
      </Router>
    </AppStore>
  </ErrorBoundary>
);


