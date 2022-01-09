import type { IForm } from '@/base-ui/form/types/type'

const IForm: IForm = {
  formConfig: [
    {
      type: 'input',
      label: '账号',
      placeholder: '请输入姓名'
    },
    {
      type: 'password',
      label: '密码',
      placeholder: '请输入姓名'
    },
    {
      type: 'select',
      label: '游戏',
      placeholder: '请输入姓名',
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

export default IForm
