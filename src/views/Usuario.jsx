import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Usuario() {

    const { id } = useParams();

    const url = "https://dummyjson.com/users/";

    const [user, setUser] = useState({})

    const getData = async () => {

        const res = await fetch(url + id);
        const data = await res.json();
        
        setUser(data);


    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <div>usuario</div>

            <div>{user.firstName}</div>
            <div>{user.age}</div>
            <div>{user.email}</div>
            <div>{user.bloodGroup}</div>
            <img src={user.image} alt="" />
            
        </div>
    )

}