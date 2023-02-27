import React from 'react'

export interface IRoute {
  name: string;
  path: string;
  showInMenu?: boolean;
  icon?: React.ReactNode;
  component: React.ReactNode;
}
