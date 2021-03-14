import React from 'react';

function Project({
    title,
    imgPath,
    myUrl,
    originalUrl
}) {
    return (
        <article className="project">
          <img className="project__img" src={imgPath} alt={"image " + title} />
          <div className="project__link">
                <a href={myUrl} className="project__title" target="_blank" rel="noreferrer">{title}</a>
                <a href={originalUrl} className="project__title" target="_blank" rel="noreferrer">Original</a>
          </div>
        </article>
    )
}

export default Project
