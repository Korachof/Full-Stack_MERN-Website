import React, {useState} from 'react';
import StaffRow from "../components/StaffRow.js"

function StaffPage() {

    const [results, setOutcomes] = useState ([]);
    const fetchResults = () => {
        fetch("https://randomuser.me/api/?results=10")
            .then((response) => response.json())
            .then((response) => {
                setOutcomes(response.results);
            })
            .catch(() => {
                alert("I'm sorry! The API appears to be unavailable.")
            });
    };
    return (
        <>


            <h2>Our Staff</h2>
        
            <article>
                <p>
                    Click one of the buttons below to choose which method you'd prefer to display random person 
                    data from the
                    <a href="https://randomuser.me/" target="_blank">Random User Generator</a> website.
                </p>
                <p>API Call
                <button id="directFromServer" onClick={fetchResults} value="Call from the Server.">Direct from Server</button>
                </p>
                <table>
                    <caption>Name, Email, Phone, and Location</caption>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name &amp; Email</th>
                            <th>Phone Number</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody id="randomStaff">
                        {results.map((person, main) => <StaffRow person={person} key={main} />)}
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default StaffPage;