import ArticleTeaser from './ArticleTeaser.jsx'
import Article from './Article'

function ArticleGroup({article}) {

    return(
        <div>
            <hr className="container" />
            <ArticleTeaser
                objectID={article.objectID}
                title={article.title}
                created_at={article.created_at}
                handleTitleClick={handleTitleClick} 
            />
            <hr className="container"/>
            <Article {...article} />
        </div>
    )
}

export default ArticleGroup