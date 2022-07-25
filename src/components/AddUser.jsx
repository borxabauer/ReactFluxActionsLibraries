import { useState, useContext } from "react"

import { myContext } from "../context/MyContextComponent"

function AddUser () {

    const { actions } = useContext(myContext)
    const [newUser, setNewUser] = useState("")

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