import React from 'react'

export default function LuoghiBodyAccomodation({accomodations}) {
    return (
        <div>
            {accomodations.map((el, index) => {
                    return (
                        <div key={el.id}>
                            {(accomodations.length > 1) &&
                            <h2>Alternativa {index + 1}</h2>}
                            <div>
                                {el.images.map(img=>{
                                    return(
                                    <img key={img.id} src={img.image} alt={img.image_name} style={{width: 100, height: 100}}/>
                                    )
                                })}
                            </div>
                            <div>
                                <h2>{el.name}</h2>
                                <p>{el.description}</p>
                                {(el.tags) && el.tags.map(tag=>{
                                    return(
                                        <span key={tag.id}>{tag.name}</span>
                                    )
                                })}
                            </div>
                        </div>
                        )})}
        </div>
    )
}
