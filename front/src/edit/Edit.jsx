import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const Edit = () => {
    let navigate = useNavigate();

    const { id } = useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });

    const { username, name, email } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/users/update/${id}`, user);
        navigate("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/api/users/${id}`);
        setUser(result.data);
    };

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <div className="container">
            <nav className="navbar bg-primary-subtle">
                <div className="container-fluid">
                    <div className="navbar-brand">User List / <Link to="/">Home</Link></div>
                    <div className="navbar-brand">Edit</div>
                    <Link className="btn btn-outline-dark" to="/">Back</Link>
                </div>
            </nav>
            <form className="shadow p-3" onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">UserName</label>
                    <input type={"text"} className="form-control" name="username" id ="username" value={username} onChange={(e) => onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type={"text"} className="form-control" name="name" id="name" value={name} onChange={(e) => onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type={"email"} className="form-control" name="email" id="email" value={email} onChange={(e) => onInputChange(e)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}