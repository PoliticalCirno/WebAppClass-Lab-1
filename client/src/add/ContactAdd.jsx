import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';

function AddCont() {
    const navigate = useNavigate();

    const API = "https://assignment-3-backend-2t8x.onrender.com/api/contacts";

    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                firstName: first,
                lastName: last,
                email
            })
        });

        navigate("/contact");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder='First Name' value={first} onChange={(e) => setFirst(e.target.value)}/><input type="text" placeholder='Last Name' value={last} onChange={(e) => setLast(e.target.value)} style={{marginLeft: "1em"}}/>
                    <br></br>
                    <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} style={{marginTop: "2em", width: "26em"}}/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button type='submit'>Submit</button>
                </label>
            </form>
        </>
    );
}

export default AddCont;