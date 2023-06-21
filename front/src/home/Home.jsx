import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {

    const [users, setUsers] = useState([]);

    const refreshPage = () => window.location.reload();

    const getUsers = async () => {
        await axios.get('http://localhost:8080/api/users/')
            .then((response) => {
                setUsers(response.data);

            })
            .catch((error) => {
                console.error(`Error: ${error}`);
            });
    };

    const deletUser = async (id) => {
        await axios.delete(`http://localhost:8080/api/users/delete/${id}`);
        console.log('deleted');
        refreshPage();
        // getUsers();
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="container">
            <nav className="navbar bg-primary-subtle">
                <div className="container-fluid">
                    <div className="navbar-brand">User List / </div>
                    <Link to="/" className="navbar-brand">Home</Link>
                    <Link to="/add"><button type="button" className="btn btn-outline-dark">Add</button></Link>
                </div>
            </nav>
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th>
                            UserName
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Function
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u) => (
                            <tr key={u.id}>
                                <td>{u.username}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>
                                    <Link
                                        to={`/view/${u.id}`}
                                        className="btn btn-outline-primary mx-2"
                                    >View</Link>
                                    <Link
                                        to={`/edit/${u.id}`}
                                        className="btn btn-primary mx-2"
                                    >Edit</Link>
                                    <button className="btn btn-danger mx-2" onClick={() => deletUser(u.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Home
