import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export function EditLego ({ legotoEdit }) {

    const [name,  setName] = useState(legotoEdit.name);
    const [price, setPrice] = useState(legotoEdit.price);
    const [date, setDate] = useState(legotoEdit.date);

    const renavigate = useNavigate();

    const editLego = async () => {
        const reply = await fetch(`/legolog/${legotoEdit._id}`, {
            method: "PUT",
            body: JSON.stringify({
                name: name,
                price: price,
                date: date
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if(reply.status === 200){
            alert(`The Document has been edited`);
            renavigate("/legolog");
        } else {
            const editError = await reply.json();
            alert(`Document failed edit with error = ${reply.status}. ${editError.Error}`);
            renavigate("/legolog");
        }
        renavigate("/");
    };

    return (
        <>
        <article>
            <h2>Update Lego sets in the collection</h2>
            
            <p>Use this page to update Lego sets already in the collection. The set should be a 
                set that has an announced retirement from the Lego product line. It will include the 
                set's name, its current price, and the estimated date of retirement. 
            </p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which Lego set are you adding?</legend>
                    <label for="name">Set Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        id="name" />

                    <label for="price">Set Price</label>
                    <input
                        type="number"
                        value={price}
                        placeholder="Price of the Lego set"
                        onChange={e => setPrice(e.target.value)}
                        id="price" />
                    
                    <label for="retiring">Date Retiring</label>
                    <input
                        type="date"
                        value={date}
                        placeholder="Date of retirement"
                        onChange={e => setDate(e.target.value)}
                        id="year" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={editLego}
                        id="submit">Add</button> to the set collection!
                    </label>
                </fieldset>
            </form>
        </article>
        </>
    );
}

export default EditLego;