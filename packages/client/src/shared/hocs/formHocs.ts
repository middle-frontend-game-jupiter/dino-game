import { TextField, TextFieldProps } from '@mui/material'
import { ComponentType } from 'react'
import withFieldHOC from '@/app/hocs/form/WithFieldHOC'
import { FieldRenderProps } from 'react-final-form'

export const TextFieldForm = withFieldHOC(TextField) as ComponentType<
  FieldRenderProps<any, HTMLElement, any> & TextFieldProps
>;
