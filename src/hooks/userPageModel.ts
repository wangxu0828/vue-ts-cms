import PageModel from '@/components/page-model'
import { ref } from 'vue'

export const userPageModel = () => {
  const pageModelRef = ref<InstanceType<typeof PageModel>>()
  const editEchoFormData = ref({})
  const handleUpdateClick = () => {
    editEchoFormData.value = {}
    pageModelRef.value.dialogVisible = true
  }
  const handleEditClick = (row: any) => {
    pageModelRef.value.dialogVisible = true
    editEchoFormData.value = { ...row.value }
  }

  return [pageModelRef, editEchoFormData, handleUpdateClick, handleEditClick]
}
