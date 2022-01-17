import * as echarts from 'echarts'

export default function (el: HTMLElement) {
  const echartsInstance = echarts.init(el)

  const setOptions = (option: echarts.EChartsOption) => {
    echartsInstance.setOption(option)
  }

  window.addEventListener('resize', () => {
    echartsInstance.resize()
  })

  const resize = () => {
    echartsInstance.resize()
  }

  return {
    echartsInstance,
    setOptions,
    resize
  }
}
