import React, { useCallback, FC, useState } from 'react'

import { useAppSelector } from '@/app/hooks/redux'
import { authModel } from '@/entities/auth'
import { useUpdateProfileMutation } from '@/services/user'
import { UserEntity } from '@/shared/types/User'
import { UserContainer } from './UserContainer'
import { UserSettingsForm } from './UserSettingsForm'
import { useMeMutation } from '@/services/auth'
import { ApiError } from '@/shared/types/Errors'


const UserSettings: FC = () => {
  const user = useAppSelector(authModel.selectors.getUserSelector)
  
  const [reason, setErrorReason] = useState<string | null>(null)

  const [profileQuery, { isError, isLoading }] = useUpdateProfileMutation()
  const [meQuery] = useMeMutation()
  
  const onChangeUser = useCallback(async (payload: Omit<UserEntity, 'avatar' | 'id'>) => {
    try {
      setErrorReason(null)

      await profileQuery({ ...user, ...payload } as UserEntity).unwrap()
      await meQuery({}).unwrap()
    } catch(error) {

      setErrorReason((error as ApiError).data.reason)
    }
  }, [user])

  
  return (
    <UserContainer user={user}>
      { 
        (user: Omit<UserEntity, 'avatar' | 'id'>) => (
          <UserSettingsForm 
            user={user} 
            isError={isError}
            isLoading={isLoading}
            onChangeUser={onChangeUser}
            reason={reason}
          />
        ) 
      }
    </UserContainer>
  )
}

export default UserSettings;