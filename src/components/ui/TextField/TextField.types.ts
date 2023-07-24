export type TextFieldType = {
  id: string
  label?: string
  className?: string
  description?: string
  fullWidth?: boolean
  disabled?: boolean
  error?: string | false
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  fieldClassName?: string
  type?: 'input' | 'textarea'
}
