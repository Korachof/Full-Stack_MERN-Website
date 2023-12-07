import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export function CreateLego () {

    const [name,  setName] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");

    const renavigate = useNavigate();

    const addLego = async () => {
        const newLego = {name, price, date}
        const reply = await fetch("/legolog", {
            method: "post",
            body: JSON.stringify(newLego),
            headers: {
                "Content-Type": "application/json",
            }
        });
        if(reply.status === 201){
            alert(`The Document has been created`);
        } else {
            alert(`Document failed to be created with error = ${reply.status}`);
            
        }
        renavigate("/legolog");
    };

    return (
        <>
        <article>
            <h2>Add new Lego sets to the collection</h2>
            
            <p>Use this page to add a new desired Lego set to the collection. The set should be a 
                set that has an announced retirement from the Lego product line. It will include the 
                set's name, its current price, and the estimated date of retirement. 
            </p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which Lego set are you adding?</legend>
                    <label htmlFor="name">Set Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        id="name" />

                    <label htmlFor="price">Set Price</label>
                    <input
                        type="number"
                        value={price}
                        placeholder="Price of the Lego set"
                        onChange={e => setPrice(e.target.value)}
                        id="price" />
                    
                    <label htmlFor="date">Date Retiring</label>
                    <input
                        type="date"
                        value={date}
                        placeholder="Date of retirement"
                        onChange={e => setDate(e.target.value)}
                        id="date" />

                    <label htmlFor="submit">
                    <button
                        type="submit"
                        onClick={addLego}
                        id="submit">Add</button> to the set collection!
                    </label>
                </fieldset>
            </form>
        </article>
        </>
    );
}

export default CreateLego;