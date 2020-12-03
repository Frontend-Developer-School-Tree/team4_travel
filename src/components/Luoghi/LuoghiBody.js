import React from 'react'

function LuoghiBody({rows}) {
    return (
        <div>
            {rows.map(row=>{
                return(
                    <div key={row.id}>
                        <h4>{row.days[0].name}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default LuoghiBody
