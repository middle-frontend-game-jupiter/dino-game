import App from '@/app/App'
import { createStore } from '@/app/providers/store/config/store'
import { renderToString } from 'react-dom/server'
import { AppStore } from './app/hocs/AppStore'
import { ErrorBoundary } from './app/providers/errorBoundary'
import { Router } from './app/hocs/AppRouter'


async function render(uri: string) {
    console.log(uri)
    // const init = {
    //   user: UserMapper.toView(state.user),
    //   auth: state.auth,
    // }
  
    const store = createStore()
  
    const renderResult = renderToString(
      <ErrorBoundary>
        <AppStore store={store}>
          <Router>
            <App />
          </Router>
        </AppStore>
      </ErrorBoundary>
    )
  
    return [renderResult]
  }
  
  export { render }