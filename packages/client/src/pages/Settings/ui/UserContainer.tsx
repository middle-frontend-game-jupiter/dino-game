import { useMemo } from 'react'

import { omit } from '@/shared/lib/objectUtils'
import { UserEntity } from '@/shared/types/User'

type UserContainerProps = {
  user: UserEntity | null;
  children: (user: Omit<UserEntity, 'avatar' | 'id'>) => JSX.Element
}
  
export const User = ({ user, children }: UserContainerProps) => {
  const memo = useMemo(() => user && omit(user, 'avatar', 'id'), [user])
    
  return memo && children(memo)
}