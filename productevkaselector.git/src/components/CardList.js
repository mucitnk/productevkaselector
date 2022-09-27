import React from 'react';
import Card from './Card';
const CardList = ({ pros }) => {
    return(
    <div>
        {
        pros.map((pro, i) => {
            return(
                <Card 
                    key={i} 
                    name={pros[i].name} 
                    weblink={pros[i].weblink} 
                    photo={pros[i].photo}
                    sku={pros[i].sku}/>
            )
        })
        }
    </div>
    )
}

export default CardList;