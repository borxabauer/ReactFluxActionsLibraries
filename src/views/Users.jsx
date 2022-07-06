import { useContext } from "react"

import { myContext } from "../services/Context"
import AddUser from "../components/AddUser"

function Users () {

    const { states } = useContext(myContext)

    return (
        <>
            <h2>Users view</h2>
            <AddUser/>
            <h3>Users</h3>
            <ul>
                {
                    states.users.length > 0 ?
                        states.users.map(
                            (user, index) => <li key={index}>{user}</li>
                        )
                    :
                        <li>No existen usuarios.</li>
                }
            </ul>
        </>
    )
}

export default Users