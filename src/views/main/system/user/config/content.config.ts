const contentConfig: any = {
  tableConfigList: [
    {
      prop: 'name',
      label: '姓名',
      minWidth: '100',
      slotName: 'name'
    },
    {
      prop: 'realname',
      label: '真实姓名',
      minWidth: '100',
      slotName: 'realname'
    },
    {
      prop: 'cellphone',
      label: '手机号码',
      minWidth: '100',
      slotName: 'cellphone'
    },
    {
      prop: 'enable',
      label: '是否可用',
      minWidth: '100',
      slotName: 'enable'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '250',
      slotName: 'handler'
    }
  ],
  showSelection: true,
  showIndex: true,
  title: '用户列表'
}

export default contentConfig
