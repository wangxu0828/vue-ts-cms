import { ref } from 'vue'
import PageContent from '@/components/page-content'

export const userPageSearch = () => {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const handleResetClick = (queryInfo: any) => {
    pageContentRef.value.getPageInfo(queryInfo)
  }
  const handleQueryClick = (queryInfo: any) => {
    console.log(queryInfo)

    pageContentRef.value.getPageInfo(queryInfo)
  }

  return [pageContentRef, handleResetClick, handleQueryClick]
}
