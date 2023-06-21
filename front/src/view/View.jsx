import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const View = () => {

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });

    const { id } = useParams();

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/api/users/${id}`);
        setUser(result.data);
    };

    useEffect(() => {
        loadUser()
    }, [])

    return (
        <div className="container">
            <nav className="navbar bg-primary-subtle">
                <div className="container-fluid">
                    <div className="navbar-brand">User List / <Link to="/">Home</Link></div>
                    <div className="navbar-brand">User Detail</div>
                    <Link className="btn btn-outline-dark" to="/">Back</Link>
                </div>
            </nav>
            <div className="card">
                <div className="card-header">
                    Detail of user id: {user.id}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Name:</b>
                            {user.name}
                        </li>
                        <li className="list-group-item">
                            <b>UserName:</b>
                            {user.username}
                        </li>
                        <li className="list-group-item">
                            <b>Email:</b>
                            {user.email}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default View