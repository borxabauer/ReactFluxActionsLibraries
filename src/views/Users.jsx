import { useContext } from "react"

import { myContext } from "../context/MyContextComponent"
import AddUser from "../components/AddUser"
import UserList from "../components/UsersList"

function Users () {

    const { states } = useContext(myContext)

    return (
        <>
            <h2>Vista de usuarios</h2>
            <AddUser/>
            <h3>Users</h3>
            <UserList users={states.users}/>
        </>
    )
}

export default Users