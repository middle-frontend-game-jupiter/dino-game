import React, { memo } from 'react'

import { TextFieldForm } from '@/shared/hocs/formHocs'
import { UserEntity } from '@/shared/types/User'
import { Grid } from '@mui/material'
import { Field } from 'react-final-form'
import { Labels } from '../lib/config'

export const FormFields = memo<any>(({ user }: { user: UserEntity }) => 
  Object.keys(user)
    .map((key, index) => (
      <Grid 
        item 
        width='180px'
        key={`${key}-${index}`}
      >                  
        <Field 
          name={key}
          label={Labels[key]}
          component={TextFieldForm}
        />
      </Grid>
    ))
);