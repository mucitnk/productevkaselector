import React from 'react';

const Card = ({name, weblink, photo, sku}) => {
    return(
        <div className='tc bg-white dib br3 pa3 ma2 grow shadow-5'>
            <a href={weblink}>
            <img alt='robots' src={photo} width="200" height="auto" />
            <div>
                <h2>{name}</h2>
                <p>{sku}</p>
            </div>
            </a>
        </div>
    );
}

export default Card;