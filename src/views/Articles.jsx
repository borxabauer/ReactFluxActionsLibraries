import { useContext } from "react"

import { myContext } from "../services/Context"
import AddArticles from "../components/AddArticles"

function Articles () {

    const { states } = useContext(myContext)

    return (
        <>
            <h2>Articles view</h2>
            <AddArticles/>
            <h3>Articles</h3>
            <ul>
                {
                    states.articles.length > 0 ?
                        states.articles.map(
                            (article, index) => <li key={index}>{article}</li>
                        )
                    :
                        <li>No existen artículos.</li>
                }
            </ul>
        </>
    )
}

export default Articles