import React from 'react'

function LuoghiBody({rows}) {
    return (
        <div>
            {rows.map(row=>{
                return(
                    <div key={row.id}>
                        <p>{row.places[0].name}</p>
                        <p>{row.days[0].name}</p>
                        <p></p>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default LuoghiBody
