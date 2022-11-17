import { useQuery } from 'react-query'
import { getPosts } from '../../apis/postsApiAxios'
import './BasicXhr.css'

function BasicXhr() {
  const { isLoading, isError, error, data: posts } = useQuery('postsxhr', getPosts)

  let content
  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isError) {
    content = <p>{error.message}</p>
  } else {
    content = posts.map((post) => {
      return (
        <article key={post.id}>
          <div className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </article>
      )
    })
  }

  return (
    <div className='BasicXhr'>
      <div className="content">
        {content}
      </div>
    </div>
  )
}

export default BasicXhr