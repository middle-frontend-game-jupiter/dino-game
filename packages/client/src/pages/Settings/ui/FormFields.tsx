import React, { memo } from 'react'

import { TextFieldForm } from '@/shared/hocs/formHocs'
import { UserEntity } from '@/shared/types/User'
import { Box } from '@mui/material'
import { Field } from 'react-final-form'
import { Labels } from '../lib/config'


export const FormFields = memo<unknown | any>(({ user }: { user: UserEntity }) => 
  Object
    .keys(user)
    .map((key, index) => (
      <Box
        display="flex"
        key={`${key}-${index}`}
        justifyContent="center"
        alignItems="center"
        marginBottom="10px"
        width="500px"
      >            
        <Field 
          sx={{ width: '100%' }}
          name={key}
          label={Labels[key]}
          component={TextFieldForm}
        /> 
     </Box>
    )
))