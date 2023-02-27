import React, {FC} from 'react'
import { Link } from 'react-router-dom'
import { IRoute } from '@/shared/types/routes-type'

interface IMenu {
  routes: IRoute[]
}

{/*Временная реализация*/}
export const Menu: FC<IMenu> = ({
                                  routes= []
}) => {

  return (
    <ul>
      {routes.map(({path, name , showInMenu}) => {
        return showInMenu && (
          <li key={path}>
            <Link to={path}>{name}</Link>
          </li>
        );
      })}
    </ul>
  )

}
