import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({guitars, deleteGuitar}) => {
    return guitars.map(guitar=>(
        <tr key={guitar.name}>
            <td>{guitar.name}</td>
            <td>{guitar.type}</td>
            <td>{guitar.color}</td>
            <td>{guitar.price}</td>
            <td className='delete-btn' onClick={()=>deleteGuitar(guitar.name)}>
                <Icon icon={trash}/>
            </td>
        </tr>
    ))
}