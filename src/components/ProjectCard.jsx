import './ProjectCard.css'

// "props" acts like a function argument. It holds the data we send it.
function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="tags">
        {/* This creates a little span for every tag in the list */}
        {props.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
      </div>
    </div>
  )
}

export default ProjectCard
