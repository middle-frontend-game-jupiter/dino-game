import { MODE } from '@/app/styles/variables/global'

export default (mode: MODE) => ({
  root: {
    color: mode === MODE.LIGHT ? 'black' : 'white',
    fontWeight: 'bold',
  },
})
