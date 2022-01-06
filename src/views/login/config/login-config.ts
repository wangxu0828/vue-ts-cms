export const rules = {
  name: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '账号大小为5-10位',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码要3位以上',
      trigger: 'blur'
    }
  ]
}
