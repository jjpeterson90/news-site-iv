import { Link } from 'react-router-dom'

function ArticleTeaser( { article } ) {
  
  return (
    <div>
      <hr />
      <div className="d-flex">
        {/* <div>
          { props.article.image ?
            <img src={props.article.image} className="rounded portrait me-3 align-self-center"/>
            : '' }
        </div> */}
        <div>
          <h3 className="m-0 text-capitalize">
          <Link to={`/articles/${article.objectID}`}>
            {article.title}
          </Link>
          </h3>
          <p className="m-0 text-muted">
            Created: {article.created_at.substring(0,10)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ArticleTeaser;