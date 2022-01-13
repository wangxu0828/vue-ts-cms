import type { IForm } from '@/base-ui/form/types/type'

const Form: IForm = {
  formConfig: [
    {
      field: 'name',
      type: 'input',
      label: '姓名',
      placeholder: '请输入姓名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入姓名'
    },
    {
      field: 'password',
      type: 'input',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '手机号码',
      placeholder: '请输入手机号码'
    }
  ],
  itemLayout: { padding: '0' },
  colLayout: { span: 24 }
}

export default Form
