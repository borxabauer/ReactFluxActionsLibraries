import { useState, useContext } from "react"

import { myContext } from "../services/Context"

function AddUser () {

    const [newUser, setNewUser] = useState("")

    const { actions } = useContext(myContext)

    return (
        <>
            <input
                type="text"
                placeholder="Añade un usuario..."
                value={newUser}
                onChange={(ev)=>{setNewUser(ev.target.value)}}
            />
            <button onClick={()=>{actions.addUser(newUser)}}>
                Añadir
            </button>
        </>
    )
}

export default AddUser