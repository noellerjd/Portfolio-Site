import Image from "next/image";

export default function projectCard(props) {
  const hasVideo = Boolean(props.video);

  return (
    <div className="project-card">
      <Image
        className="project-img"
        src={props.img}
        alt={props.name}
        width={250}
        height={200}
      />
      <div className="project-info">
        <a href={props.link} className="project-link" target="_blank">
          <h1 className="project-title">
            <span className="project-arrow">{"▶"}</span>
            {props.name}
          </h1>
        </a>
        {hasVideo && (
          <p className="video-link">
            <a href={props.video} target="_blank" rel="noopener noreferrer">
              <span className="project-arrow">{"▶"}</span>Video Demonstration
            </a>
          </p>
        )}
        <div className="project-description">
          <p className="project-text">
            {props.description.length > 300
              ? props.description.substring(0, 300) + "..."
              : props.description}
          </p>
          <p className="project-tech">{props.technologies}</p>
        </div>
      </div>
    </div>

    // <div className="project-card">
    //   <div className="project-inner">
    //     <a
    //       href={props.link}
    //       className="project-link"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         className="project-img"
    //         src={props.img}
    //         alt={props.name}
    //         width={250}
    //         height={200}
    //       />
    //     </a>
    //   </div>
    //   <div className="description-container">
    //     <a href={props.link} className="project-link" target="_blank">
    //       <h1 className="project-title">
    //         <span className="project-arrow">{"▶"}</span>
    //         {props.name}
    //       </h1>
    //     </a>
    //     <div className="project-description">
    //       {hasVideo && (
    //         <p className="video-link">
    //           <a href={props.video} target="_blank" rel="noopener noreferrer">
    //             <span className="project-arrow">{"▶"}</span>Video Demonstration
    //           </a>
    //         </p>
    //       )}
    //       {props.description.length > 300
    //         ? props.description.substring(0, 300) + "..."
    //         : props.description}
    //       {/* {props.description} */}
    //     </div>
    //   </div>
    // </div>
  );
}
