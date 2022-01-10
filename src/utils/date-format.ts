import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

const UTCDataFormat = (
  UTCString: string,
  formatType: string = DATE_TIME_FORMAT
) => {
  return dayjs.utc(UTCString).format(formatType)
}

export default UTCDataFormat
