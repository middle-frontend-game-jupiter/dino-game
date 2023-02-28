import { TextField, TextFieldProps } from '@mui/material'
import { ComponentType } from 'react'
import FieldHOC from '@/app/hocs/form/FieldHOC'
import { FieldRenderProps } from 'react-final-form'

export const TextFieldForm = FieldHOC(TextField) as ComponentType<
  FieldRenderProps<any, HTMLElement, any> & TextFieldProps
>;
