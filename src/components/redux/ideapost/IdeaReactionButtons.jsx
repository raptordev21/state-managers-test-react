import { useDispatch } from 'react-redux'
import { reactionAdded } from '../../../features/ideapost/ideapostsSlice'

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '🤯',
  heart: '😍',
  rocket: '🚀',
  coffee: '☕',
}

function IdeaReactionButtons({ post }) {
  const dispatch = useDispatch()

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type='button'
        className='reactionButton'
        onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
      >
        {emoji} {post.reactions[name]}
      </button>
    )
  })

  return (
    <div>{reactionButtons}</div>
  )
}

export default IdeaReactionButtons