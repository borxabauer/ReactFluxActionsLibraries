import { useState, useContext } from "react"

import { myContext } from "../context/MyContextComponent"

function AddArticle () {

    const { actions } = useContext(myContext)
    const [newArticle, setNewArticle] = useState("")

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