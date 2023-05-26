import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

import Form from 'react-bootstrap/Form';

export default function Home() {

    const url = "https://dummyjson.com/users"
    const [users, setUsers] = useState([]);
    const [id, setId] = useState(0);

    const getData = async () => {

        const res = await fetch(url);
        const { users } = await res.json();
        setUsers(users);

    }

    useEffect(() => {
        getData();
    }, []);

    const navigate = useNavigate();
    const irAUsuario = () => {
        navigate(`/usuario/${id}`)
    }


    return (
        <div>
            <div>Home</div>
            <Form.Select aria-label="Default select example" onChange={({target})=> {setId(target.value)}}>
            <option value="" disabled> Usuarios </option>
                {users.map((user, index) => <option key={index} value={user.id} >{user.firstName}</option>)}
            </Form.Select>

            <button onClick={irAUsuario}>Ver usuario</button>

        </div>

    )

}// 