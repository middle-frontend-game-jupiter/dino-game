import { useMemo, FC } from 'react'

import { omit } from '@/shared/lib/objectUtils'
import { UserEntity } from '@/shared/types/User'

import { Box } from '@mui/system';

type UserContainerProps = {
  user: UserEntity | null;
  children: (user: Omit<UserEntity, 'avatar' | 'id'>) => JSX.Element
}
  
export const UserContainer: FC<UserContainerProps> = ({ user, children }) => {
  const memo = useMemo(() => user && omit(user, 'avatar', 'id'), [user])
    
  return (
    <Box 
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      width="100%"
    >
      { memo && children(memo) }
    </Box>
  )
}