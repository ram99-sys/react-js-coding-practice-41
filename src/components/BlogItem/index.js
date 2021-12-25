import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {description, title, publishedDate} = blogDetails

  return (
    <li className="blog-list-item">
      <div className="title-date-alignment">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="line" />
    </li>
  )
}

export default BlogItem
