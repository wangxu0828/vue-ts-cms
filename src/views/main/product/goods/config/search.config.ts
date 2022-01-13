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
      field: 'enable',
      type: 'select',
      label: '用户状态',
      placeholder: '请选择用户状态',
      options: [
        {
          label: '启用',
          value: '1'
        },
        {
          label: '禁用',
          value: '0'
        }
      ]
    },
    {
      field: 'createAt',
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
