import type { IForm } from '@/base-ui/form/types/type'

const Form: IForm = {
  formConfig: [
    {
      field: 'id',
      type: 'input',
      label: '账号',
      placeholder: '请输入姓名'
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入姓名'
    },
    {
      field: 'sport',
      type: 'select',
      label: '喜欢的运动',
      placeholder: '请选择喜欢的运动',
      options: [
        {
          label: '吃鸡',
          value: '吃鸡'
        },
        {
          label: 'lol',
          value: 'lol'
        }
      ]
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '日期',
      placeholder: '请输入姓名',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '120px',
  itemLayout: { padding: '20px 40px 0 ' },
  colLayout: { span: 8 }
}

export default Form
