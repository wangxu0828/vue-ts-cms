const contentConfig: any = {
  tableConfigList: [
    {
      prop: 'name',
      label: '菜单名称',
      minWidth: '150'
    },
    {
      prop: 'type',
      label: '菜单类型',
      minWidth: '80'
    },
    {
      prop: 'url',
      label: '菜单url',
      minWidth: '150'
    },
    {
      prop: 'icon',
      label: '菜单icon',
      minWidth: '150'
    },
    {
      prop: 'permission',
      label: '按钮权限',
      minWidth: '150'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '200',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '200',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showSelection: false,
  showIndex: false,
  title: '菜单列表',
  showPagination: false,
  treeShow: {
    rowKey: 'id',
    treeProps: { children: 'children' }
  }
}

export default contentConfig
