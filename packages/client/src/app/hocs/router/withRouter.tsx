import React from "react";
import { BrowserRouter } from "react-router-dom";

const withRouter = (component: () => React.ReactNode | JSX.Element) => () => (
  <BrowserRouter>
    {component()}
  </BrowserRouter>
);

export default withRouter;