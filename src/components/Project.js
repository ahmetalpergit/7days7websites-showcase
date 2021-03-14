import React from 'react';

function Project({
    title,
    imgPath,
    myUrl,
    originalUrl,
    day
}) {
    return (
        <article className="project">
          <div className="project__img-container">
                <img className="project__img" src={imgPath} alt={"image " + title} />
                <span className="project__day">{day}</span>
                <div className="project__link">
                    <a href={myUrl} className="project__title" target="_blank" rel="noreferrer">{title}</a>
                    <a href={originalUrl} className="project__title" target="_blank" rel="noreferrer">Original</a>
                </div>
          </div>

        </article>
    )
}

export default Project
