import Image from "next/image";

export default function projectCard(props) {
  const hasVideo = Boolean(props.video);

  return (
    <div className="project-card">
      {/* <Image
        className="project-img"
        src={props.img}
        alt={props.name}
        width={250}
        height={200}
      /> */}
      <div className="project-info">
        <div>
          <h1 className="project-title">
            <a href={props.link} className="project-link" target="_blank">
              <span className="project-arrow">{"▶"}</span>
              {props.name}
            </a>
          </h1>
        </div>
        <div>
          {hasVideo && (
            <p className="video-link">
              <a href={props.video} target="_blank" rel="noopener noreferrer">
                <span className="project-arrow">{"▶"}</span>Video Demonstration
              </a>
            </p>
          )}
        </div>
        <div className="project-description">
          <p className="project-text">
            {/* {props.description.length > 300
              ? props.description.substring(0, 300) + "..."
              : props.description} */}
            {props.description}
          </p>
        </div>
        <div className="short-description">
          <p className="project-short">{props.short_description}</p>
        </div>
        <div className="project-tech">
          <ul className="tech-list">
            {props.technologies.map((tech, i) => (
              <li key={i} className="tech-item">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="line" />
      </div>
    </div>
  );
}
