import { compose } from '@/shared/lib/compose'
import withRouter from '@/app/hocs/router/withRouter'
import withStore from '@/app/hocs/store/withStore'

export const withRootHocs = compose(withRouter, withStore)
