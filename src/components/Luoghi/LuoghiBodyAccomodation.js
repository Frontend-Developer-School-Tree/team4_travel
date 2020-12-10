import React from 'react'

export default function LuoghiBodyAccomodation({accomodations}) {
    return (
        <div>
            {accomodations.map((el, index) => {
                    return (
                        <div className="row" key={el.id}>
                            {(accomodations.length > 1) &&
                            <h2>Alternativa {index + 1}</h2>}
                            <div className="container-gallery col-6 p-4">
                                {el.images.map(img=>{
                                    return(
                                    <img key={img.id} src={img.image} alt={img.image_name} style={{width: 150, height: 150}}/>
                                    )
                                })}
                            </div>
                            <div className="col-6 p-4">
                                <div className="p-2" style={{fontSize:'20px', lineHeight:'23px'}}>{el.name}</div>
                                <div className="p-2" style={{fontSize:'16px', lineHeight:'18px'}}>{el.description}</div>
                                <a className="p-2" href="#">Clicca qui per maggiori dettagli</a>
                                {(el.tags) && el.tags.map(tag=>{
                                    return(
                                        <p className="btn_transportsbtn btn-outline  ml-4 " style={{borderRadius:'50px'}} key={tag.id}>{tag.name}</p>
                                    )
                                })}
                            </div>
                        </div>
                        )})}
        </div>
    )
}
