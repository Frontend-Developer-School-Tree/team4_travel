import React from 'react'

function LuoghiBody({rows}) {
    return (
        <div className="card-body" style={{borderTop:'1px solid lightgray'}}>
            {rows.map(row=>{
                return(
                    <div key={row.id}>
                        <h4 className="card-text p-4" style={{fontSize:'17px', lineHeight:'20px'}}>{row.days[0].name}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default LuoghiBody
