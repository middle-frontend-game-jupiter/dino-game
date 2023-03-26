import React, { useCallback } from 'react'

import { useAppSelector } from '@/app/hooks/redux'
import { authModel } from '@/entities/auth'
import { useUpdateProfileMutation } from '@/services/user'
import { UserEntity } from '@/shared/types/User'
import { User } from './UserContainer'
import { UserSettingsForm } from './UserSettingsForm'

const UserSettings = () => {
  const user = useAppSelector(authModel.selectors.getUserSelector)

  const [profileQuery, { isError, isLoading }] = useUpdateProfileMutation()
  
  const onChangeUser = useCallback((payload: Omit<UserEntity, 'avatar' | 'id'>) => {
    profileQuery({ ...user, ...payload } as UserEntity)
  }, [user])
  
  return (
    <User user={user}>
      { 
        (user: Omit<UserEntity, 'avatar' | 'id'>) => (
          <UserSettingsForm 
            user={user} 
            isError={isError}
            isLoading={isLoading}
            onChangeUser={onChangeUser}
          />
        ) 
      }
    </User>
  )
}

export default UserSettings;