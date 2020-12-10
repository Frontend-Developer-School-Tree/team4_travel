import React from 'react'

export default function LuoghiBodyAccomodation({ accomodations }) {
    return (
        <div>
            {accomodations.map((el, index) => {
                return (
                    <div className="row" key={el.id}>

                        <div className="container-gallery col-6 p-4">
                            {(accomodations.length > 1) &&
                                <h2>Alternativa {index + 1}</h2>}
                            <div className="d-flex">
                                {el.images.map((img, index) => {
                                    return (
                                         (index < 3 )
                                            && 
                                            < div className="mr-3 overlay_gallery"style={{ width: 150, height: 150, backgroundImage: `url(${img.image})`, backgroundSize: 'cover', }} key={img.id} alt={img.image_name} /> 
                                   
                                    )
                                })}
                                <div className="colonna_images ">
                                {el.images.map((img, index) => {
                                    return (
                                         (index > 2 )
                                            && 
                                            < div className="mr-3 overlay_gallery"style={{ width: 50, height: 50, backgroundImage: `url(${img.image})`, backgroundSize: 'cover', }} key={img.id} alt={img.image_name} /> 
                                   
                                    )
                                })}
                                </div>
                            </div>

                        </div>
                        <div className="col-6 p-4">
                            <div className="p-2" style={{ fontSize: '20px', lineHeight: '23px', fontWeight: '600' }}>{el.name}</div>
                            <div className="p-2" style={{ fontSize: '16px', lineHeight: '18px' }}>{el.description}</div>
                            <div><p className="p-2" style={{ textDecoration: 'underline', color: 'blue'}}>Clicca qui per maggiori dettagli</p></div>


                            {(el.tags) && el.tags.map(tag => {
                                return (

                                    <button class="btn_transports btn btn-outline  mr-2 btn-tag mt-2" style={{ borderRadius: '50px' }} key={tag.id} >{tag.name}</button>

                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
