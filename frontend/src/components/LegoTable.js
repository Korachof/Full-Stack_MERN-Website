import React from 'react';
import LegoRow from './LegoRow';

function LegoTable({ legos, deleteSingleLego, editSingleLego }) {
    return (
        <table id="legolog">
            <caption>Add and Edit Movies</caption>
            <thead>
                <tr>
                    <th>Set Name</th>
                    <th>Price</th>
                    <th>Date Retiring</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {legos.map((lego, index) => 
                    <LegoRow
                        lego={lego} 
                        key={index}
                        deleteSingleLego={deleteSingleLego}
                        editSingleLego={editSingleLego} 
                    />)}
            </tbody>
        </table>
    );
}

export default LegoTable;