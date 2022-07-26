import { useParams } from 'react-router-dom'
import Article from '../components/Article.jsx'

function ArticlePage( { getArticleById } ) {

  let { articleID } = useParams();

  const article = () => {
    return getArticleById( articleID )
  }

  return (
    <div className="container">
      <Article { ...article() }/>
    </div>
  )
}

export default ArticlePage;
