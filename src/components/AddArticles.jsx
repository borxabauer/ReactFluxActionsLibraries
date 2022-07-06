import { useState, useContext } from "react"

import { myContext } from "../services/Context"

function AddArticle () {

    const [newArticle, setNewArticle] = useState("")

    const { actions } = useContext(myContext)

    return (
        <>
            <input
                type="text"
                placeholder="Añade un artículo..."
                value={newArticle}
                onChange={(ev)=>{setNewArticle(ev.target.value)}}
            />
            <button onClick={()=>{actions.addArticle(newArticle)}}>
                Añadir
            </button>
        </>
    )
}

export default AddArticle