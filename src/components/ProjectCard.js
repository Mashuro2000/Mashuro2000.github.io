import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

export const ProjectCard = ({ id, title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <Link
        id='link'
        to={`/project/${id}`}
        className="project-link">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4 class="cursor-default">{title}</h4>
            <span class="cursor-default">{description}</span>
          </div>
        </div>
      </Link>
    </Col>
  )
}
