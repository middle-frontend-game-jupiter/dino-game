import App from '@/app/App'
import { createStore } from '@/app/providers/store/config/store'
import { renderToString } from 'react-dom/server'
import { UserMapper } from './mappers/User'

async function render(uri: string, state: InitialState) {
  const init = {
    user: UserMapper.toView(state.user),
    auth: state.auth,
  }

  const store = createStore(init)

  const renderResult = renderToString(
    <App store={store} uri={uri} />
  )

  return [renderResult]
}

export { render }