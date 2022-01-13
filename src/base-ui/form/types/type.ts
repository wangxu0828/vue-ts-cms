type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  field?: string
  type?: IFormType
  label?: string
  isHidden?: boolean
  rules?: any[]
  placeholder?: any
  // 针对select
  options?: any[]
  // 针对datepicker
  otherOptions?: any
}

export interface IForm {
  formConfig?: IFormItem[]
  labelWidth?: string
  itemLayout?: any
  colLayout?: any
}
