import PageModel from '@/components/page-model'
import { ref } from 'vue'

type cbFn = () => void

export const userPageModel = (updateCb: cbFn, editCb: cbFn) => {
  const pageModelRef = ref<InstanceType<typeof PageModel>>()
  const editEchoFormData = ref({})
  const handleUpdateClick = () => {
    editEchoFormData.value = {}
    pageModelRef.value.dialogVisible = true
    updateCb && updateCb()
  }
  const handleEditClick = (row: any) => {
    pageModelRef.value.dialogVisible = true
    editEchoFormData.value = { ...row.value }
    editCb && editCb()
  }

  return [pageModelRef, editEchoFormData, handleUpdateClick, handleEditClick]
}
