import { useSelector } from 'react-redux'
import { selectAllPosts } from '../../../features/blogpost/postsSlice'
import './PostsList.css'
import AddPostForm from './AddPostForm'
import PostAuthor from './PostAuthor'

function PostsList() {
  // const posts = useSelector(state => state.posts)
  const posts = useSelector(selectAllPosts)

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      {/* get first 100 characters for preview using substring */}
      <p className='postCredit'>
        <PostAuthor userId={post.userId} />
      </p>
    </article>
  ))

  return (
    <section className='PostsList'>
      <AddPostForm />
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostsList