import { useSelector } from 'react-redux'
import { selectAllPosts } from '../../../features/ideapost/ideapostsSlice'
import './IdeaPostList.css'
import AddIdeaPostForm from './AddIdeaPostForm'
import IdeaPostAuthor from './IdeaPostAuthor'
import IdeaTimeAgo from './IdeaTimeAgo'
import IdeaReactionButtons from './IdeaReactionButtons'

function IdeaPostsList() {
  const posts = useSelector(selectAllPosts)

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      {/* get first 100 characters for preview using substring */}
      <p className='postCredit'>
        <IdeaPostAuthor userId={post.userId} />
        <IdeaTimeAgo timestamp={post.date} />
      </p>
      <IdeaReactionButtons post={post} />
    </article>
  ))

  return (
    <section className='IdeaPostsList'>
      <AddIdeaPostForm />
      <h2>Ideas</h2>
      <div className="ideas-box custom-scroll">
        {renderedPosts}
      </div>
    </section>
  )
}

export default IdeaPostsList