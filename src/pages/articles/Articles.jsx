import { NavLink } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// style 
// import './'

function Articles() {
  const { data:articles, isPending, error} = useFetch('http://localhost:3000/articles')
  return (
    <div className='article-container'>

      {isPending && <h3>Loading ...</h3> }
      {error && <h3>{error}</h3> }

      {articles && articles.map((article) => {
        return(
          <div className='card' key={article.id}>
            <h3>Title: {article.title}</h3>
            <p>Author: <i>{article.author}</i></p>
            <NavLink to={`/articles/${article.id}`} style={{textDecoration: 'none', fontWeight: 'bold'}}>Read More</NavLink>
          </div>
        )
      } )}

    </div>
  )
}

export default Articles
