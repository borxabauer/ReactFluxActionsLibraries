import { useState, useContext } from "react"

import { myContext } from "../context/MyContextComponent"

function AddSales () {

    const { states, actions } = useContext(myContext)
    const [ userId, setUser ] = useState("null")
    const [ articleId, setArticle ] = useState("null")

    const userOptions = states.users.map(
        user => <option key={user.id} value={user.id}>{user.name}</option>
    )
    userOptions.unshift(
        <option key={null} value="null">Selecciona un usuario...</option>
    )

    const articleOptions = states.articles.map(
        article => <option key={article.id} value={article.id}>{article.name}</option>
    )
    articleOptions.unshift(
        <option key={null} value="null">Selecciona un artículo...</option>
    )

    return (
        <>
            <label>
                Usuario
                <select value={userId} onChange={(ev)=>{setUser(ev.target.value)}}>
                    {userOptions}
                </select>
            </label>
            <label>
                Artículo
                <select value={articleId} onChange={(ev)=>{setArticle(ev.target.value)}}>
                    {articleOptions}
                </select>
            </label>
            <button
                onClick={()=>{actions.addSale(parseInt(userId),parseInt(articleId))}}
                disabled={ userId === "null" || articleId === "null" }
            >
                Añadir
            </button>
        </>
    )
}

export default AddSales