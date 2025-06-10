import Image from "next/image";

export default function projectCard(props) {
  return (
    <div className="project-card">
      <div className="project-inner">
        <a href={props.link} className="project-link" target="_blank">
          <Image
            className="project-img"
            src={props.img}
            alt={props.name}
            width={250}
            height={200}
          />
          <h1>
            <span className="project-arrow">{"▶"}</span>
            {props.name}
          </h1>
        </a>
      </div>
      <div>
        <p className="project-description">
          {props.description.length > 200
            ? props.description.substring(0, 200) + "..."
            : props.description}
        </p>
      </div>
    </div>
  );
}
