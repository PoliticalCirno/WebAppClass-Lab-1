import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../App.css';

function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();

    const API = "https://assignment-3-backend-2t8x.onrender.com/api/users";

    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        fetch(`${API}/${id}`)
            .then(res => res.json())
            .then(data => {
                setFirst(data.firstName || "");
                setLast(data.lastName || "");
                setUsername(data.username || "");
                setEmail(data.email || "");
            });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                firstName: first,
                lastName: last,
                username,
                email
            })
        });
        navigate("/users");  
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" placeholder='First Name' value={first} onChange={(e) => setFirst(e.target.value)}/><input type="text" placeholder='Last Name' value={last} onChange={(e) => setLast(e.target.value)} style={{marginLeft: "1em"}}/>
                    <br></br>
                    <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} style={{marginTop: "2em", width: "26em"}}/>
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

export default Edit;