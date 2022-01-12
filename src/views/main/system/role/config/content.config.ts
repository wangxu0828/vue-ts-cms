const contentConfig: any = {
  tableConfigList: [
    {
      prop: 'name',
      label: '权限',
      minWidth: '100',
      slotName: 'name'
    },
    {
      prop: 'intro',
      label: '权限介绍',
      minWidth: '100',
      slotName: 'intro'
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
  title: '权限列表'
}

export default contentConfig
