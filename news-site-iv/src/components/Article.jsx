import '../App.css'

function Article( { title, author, created_at, story_text, url } ) {

  const getAuthor = () => {
    if (byline === null) return ''
    return byline
  }
 
  return (
    <div className="mt-3">
      <div className="d-flex align-items-center">
        {/* <div className="article-img me-3">
          { image ?
          <img src={image} className="rounded align-self-center"/>
          : '' }
        </div> */}
        <div className="">
          <h1 className="m-0 mb-2"><b>{title.replace('.','')}</b></h1>
          <p className="m-0 text-muted">Created: {created_at.substring(0,10)}</p>
          {/* { byline ?
            <h3 className="m-0">{getPropByLine()}</h3>
            : ''
          } */}
          <p>Auther: { author }</p>
          { story_text
            ?
            <p className="m-0">{story_text}</p>
            :
            url ? <a href={url}>Story Link</a> : null
          }
        </div>
      </div>
    </div>
  )
}

export default Article;