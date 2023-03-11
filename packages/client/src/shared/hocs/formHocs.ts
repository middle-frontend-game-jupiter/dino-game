import { TextField, TextFieldProps } from '@mui/material'
import { ComponentType } from 'react'
import { FieldRenderProps } from 'react-final-form'
import withFieldHOC from '@/app/hocs/form/withFieldHOC'

export const TextFieldForm = withFieldHOC(TextField) as ComponentType<FieldRenderProps<unknown, HTMLElement, unknown> & TextFieldProps>
