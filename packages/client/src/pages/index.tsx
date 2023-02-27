import React, { FC } from "react";
import { Routes, Route } from 'react-router-dom';

type OwnProps = {
  children: React.ReactNode;
}

const Page: FC<OwnProps> = ({ children }) => (
  <div>
    {children}
  </div>
)

const Routing = () => (
  <Routes>
    <Route path="/" element={<Page>Root Page</Page>} />
    <Route path="/auth" element={<Page>Auth Page</Page>} />
    <Route path="/game" element={<Page>Game Page</Page>} />
    <Route path="/leaderboard" element={<Page>LeaderBoard Page</Page>} />
    <Route path="*" element={<Page>Not Found</Page>} />
  </Routes> 
)

export default Routing