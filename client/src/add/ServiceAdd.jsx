import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../App.css';

function AddServi() {
    const navigate = useNavigate();
    const { id } = useParams();

    const API = "https://assignment-3-backend-2t8x.onrender.com/api/Services";

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: title,
                description: desc
            })
        });
        navigate("/service");  
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder='Service Name' value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <br></br>
                    <textarea placeholder='Your message here' value={desc}  onChange={(e) => setDesc(e.target.value)} style={{marginTop: "2em", width: "26em", height: "10em"}}/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button type='submit'>Submit</button>
                </label>
            </form>
        </>
    );
}

export default AddServi;