import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts, getPostsStatus, getPostsError, fetchIdeaPosts, reset } from '../../../features/ideapost/ideapostsSlice'
import { useEffect } from 'react'
import './IdeaPostList.css'
import AddIdeaPostForm from './AddIdeaPostForm'
import { IdeaPostsExcerpt } from './IdeaPostsExcerpt'

function IdeaPostsList() {
  const dispatch = useDispatch()

  const posts = useSelector(selectAllPosts)
  const postsStatus = useSelector(getPostsStatus)
  const error = useSelector(getPostsError)

  useEffect(() => {
    dispatch(fetchIdeaPosts())

    return () => {
      dispatch(reset())
    }
  }, [dispatch])

  let content;
  if (postsStatus === 'loading') {
    content = <p>"Loading..."</p>;
  } else if (postsStatus === 'success') {
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    content = orderedPosts.map(post => <IdeaPostsExcerpt key={post.id} post={post} />)
  } else if (postsStatus === 'failed') {
    content = <p>{error}</p>;
  }

  console.log('content', content)

  return (
    <section className='IdeaPostsList'>
      <AddIdeaPostForm />
      <h2>Ideas</h2>
      <div className="ideas-box custom-scroll">
        {content}
      </div>
    </section>
  )
}

export default IdeaPostsList