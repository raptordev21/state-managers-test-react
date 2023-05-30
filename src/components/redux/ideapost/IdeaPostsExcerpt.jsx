import IdeaPostAuthor from './IdeaPostAuthor'
import IdeaTimeAgo from './IdeaTimeAgo'
import IdeaReactionButtons from './IdeaReactionButtons'

export const IdeaPostsExcerpt = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      {/* get first 100 characters for preview using substring */}
      <p className='postCredit'>
        <IdeaPostAuthor userId={post.userId} />
        <IdeaTimeAgo timestamp={post.date} />
      </p>
      <IdeaReactionButtons post={post} />
    </article>
  )
}
