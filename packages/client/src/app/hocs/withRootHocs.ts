import { compose } from '@/shared/lib/compose'
import withRouter from '@/app/hocs/router/withRouter'
import withStore from '@/app/hocs/store/withStore'
import withErrorBoundary from '@/app/hocs/errorBoundary/withErrorBoundary'

export const withRootHocs = compose(withRouter, withStore, withErrorBoundary)
