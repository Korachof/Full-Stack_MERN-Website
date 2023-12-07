import React from 'react';
import { RiDeleteBin2Fill, RiEditLine } from 'react-icons/ri';

function LegoRow({ lego, editSingleLego, deleteSingleLego }) {
    return (
        <tr>
            
            <td>{lego.name}</td>
            <td>{lego.price}</td>
            <td>{lego.date.slice(0, 10)}</td>
            <td><RiDeleteBin2Fill onClick={() => deleteSingleLego(lego._id)} /></td>
            <td><RiEditLine onClick={() => editSingleLego(lego)} /></td>
            
        </tr>
    );
}

export default LegoRow;