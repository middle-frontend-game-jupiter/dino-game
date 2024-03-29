import React, { ComponentType, useCallback } from 'react'

interface WrappedFieldMetaProps {
  error?: unknown
  touched: boolean
  warning?: any
}

type Input = {
  onChange: (...args: unknown[]) => void
  onFocus: () => void
  onBlur: () => void
  checked: boolean
  value: boolean
}

interface WrappedFieldProps {
  input: Input
  meta: WrappedFieldMetaProps
}

type IFieldHOCProps<T> = T & {
  helperText?: React.ReactNode
  isErrorAlwaysVisible?: boolean
  disableHelperText?: boolean
  onChange?: (...args: unknown[]) => void
  onFocus?: () => void
  onBlur?: () => void
}

function withFieldHOC<T>(
  Field: ComponentType<IFieldHOCProps<T>>
): ComponentType {
  return props => {
    const {
      input,
      meta: { touched, error, warning },
      helperText,
      isErrorAlwaysVisible,
      disableHelperText,
      onChange,
      onFocus,
      onBlur,
      ...rest
    } = props as IFieldHOCProps<T> & WrappedFieldProps

    const handleChange = useCallback(
      (...args: unknown[]) => {
        input.onChange(...args)
        if (onChange) {
          onChange(...args)
        }
      },
      [onChange, input.onChange]
    )

    const handleFocus = useCallback(() => {
      input.onFocus()
      if (onFocus) {
        onFocus()
      }
    }, [onFocus, input.onFocus])

    const handleBlur = useCallback(() => {
      input.onBlur()
      if (onBlur) {
        onBlur()
      }
    }, [onBlur, input.onBlur])

    const errorText =
      (touched || isErrorAlwaysVisible) && error ? error : helperText

    return (
      <Field
        {...input}
        {...(rest as T)}
        checked={input.checked ?? input.value}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        error={(touched || isErrorAlwaysVisible) && error ? !!error : undefined}
        warning={warning ? warning : undefined}
        helperText={disableHelperText ? null : warning ? warning : errorText}
      />
    )
  }
}

export type { IFieldHOCProps, WrappedFieldMetaProps, WrappedFieldProps }
export default withFieldHOC
