import { parseISO, formatDistanceToNow } from "date-fns"

const IdeaTimeAgo = ({ timestamp }) => {
  let timeAgo = ''
  if (timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }

  return (
    <span title={timestamp}>
      &nbsp;&nbsp;&nbsp;&nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default IdeaTimeAgo