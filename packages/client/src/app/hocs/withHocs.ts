import withRouter from './router/with-router'
import withStore from './store/with-store'
import { compose } from '@/shared/lib/compose'

export const withHocs = compose(withRouter, withStore)
