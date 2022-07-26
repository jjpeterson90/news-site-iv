import ArticleTeaser from './ArticleTeaser.jsx'
import { Link } from 'react-router-dom'

function ArticleList( {articles} ) {
 
  return (
    <div>
      {articles.map( (article) => (
          <ArticleTeaser 
          key = { article.objectID }
          article = { article }
          />
      ))}
    </div>
  )
}

export default ArticleList;
