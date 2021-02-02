import React from 'react'
import { ChildStudent } from './ChildStudent'

export const ParentStudent=(props)=> {
    const studentName="Rehan";
    const studentAge = "22";
    return (


        <div>
            <ChildStudent item={studentName} age={studentAge}/>
        </div>
    )
}
