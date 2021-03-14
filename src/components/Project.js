import React from 'react';

function Project({
    title,
    imgPath,
    myUrl,
    originalUrl
}) {
    return (
        <article className="project">
          <img className="project__img" src={imgPath} alt=""/>
          <div className="project__link">
                <a href={myUrl} className="project__title">{title + ' My version'}</a>
                <a href={originalUrl} className="project__title">Original</a>
          </div>
        </article>
    )
}

export default Project
