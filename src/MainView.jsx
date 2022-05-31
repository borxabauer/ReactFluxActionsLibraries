import { useState, useContext } from "react"

import MyContext from "./MyContext"

function MainView () {

    const { states, actions } = useContext(MyContext)

    const [ description, setDescription ] = useState("")
    const [ pvp, setPvp ] = useState(0)

    function descriptionHandler (ev) {
        setDescription(ev.target.value)
    }

    function pvpHandler (ev) {
        setPvp(ev.target.value)
    }

    function addHandler() {
        const article = {
            description,
            pvp
        }
        actions.addArticle(article)
    }

    return (
        <>
            <h1>Your app start here...</h1>
            <h2>Nuevo artículo</h2>
                <label>Descripcion</label>
                <input type="text" value={description} onChange={descriptionHandler} />
                <label>PVP</label>
                <input type="number" value={pvp} onChange={pvpHandler} />
                <button onClick={addHandler}>Añadir</button>
            <h2>Artículos</h2>
            {
                states.articles.map(
                    (item, idx) => <p key={idx}>{item.description} - {item.pvp}</p>
                )
            }
        </>
    )
}

export default MainView