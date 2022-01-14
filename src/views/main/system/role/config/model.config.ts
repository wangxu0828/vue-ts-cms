import type { IForm } from '@/base-ui/form/types/type'

const Form: IForm = {
  formConfig: [
    {
      field: 'name',
      type: 'input',
      label: '权限名',
      placeholder: '请输入权限'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
    }
  ],
  itemLayout: { padding: '0' },
  colLayout: { span: 24 }
}

export default Form
