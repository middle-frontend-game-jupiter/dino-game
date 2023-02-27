import React from 'react';
import { withHocs } from './hocs'
import Routing from '../pages';

const App = () => (
  <div className="App">
    <Routing />
  </div>
)

export default withHocs(App);

