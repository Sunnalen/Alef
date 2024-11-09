export type TSizeInput = 'l' | 'm'

export interface ISharedInputProps {
  size?: TSizeInput,
  type: string,
  label: string
  modelValue?: string | number;
}

export type TInputClass = Record<TSizeInput, string>

export interface ISharedInputEmits {
  (event: 'update:modelValue', value: string): undefined
}