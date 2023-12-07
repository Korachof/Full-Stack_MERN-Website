import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LegoTable from '../components/LegoTable';
import { Link } from 'react-router-dom';
import { IoIosCreate } from 'react-icons/io';


function LegoLog ({ setLego }) {
    const renavigate = useNavigate();

    const [legos, setLegos] = useState([]);

    // RETRIEVE the entire list of Lego Sets
    const loadLego = async () => {
        const serverResponse = await fetch('/legolog');
        const legos = await serverResponse.json();
        setLegos(legos);
    } 

    // UPDATE a single Lego Set
    const editSingleLego = async lego => {
        setLego(lego);
        renavigate("/editpage");
    }

    // DELETE a single Lego Set
    const deleteSingleLego = async _id => {
        const serverResponse = await fetch(`/legolog/${_id}`, { method: 'DELETE' });
        if (serverResponse.status === 204) {
            const getServResponse = await fetch('/legolog');
            const legos = await getServResponse.json();
            setLegos(legos);
        } else {
            console.error(`The lego set with _id = ${_id} failed to delete, status code = ${serverResponse.status}`)
        }
    }

    // LOAD all the Lego Sets
    useEffect(() => {
        loadLego();
    }, []);

    // DISPLAY the Lego Sets
    return (
        <>
            <h2>List of Lego Sets</h2>
            <p>Below are a list of all lego sets retiring soon that I am interested in purchasing, 
                either for investment purposes or enjoyment. It includes the set names, their prices, 
                and the known date of retirement. 
            </p>
            <h4>
            Please use the following button to add a new Lego set to the log of upcoming retiring Lego sets:
            </h4>
            <p>
            <Link to="/createpage"><i><IoIosCreate /></i></Link>
            </p>
            <LegoTable
                legos={legos} 
                editSingleLego={editSingleLego} 
                deleteSingleLego={deleteSingleLego} 
            />
        </>
    );

}

export default LegoLog;
