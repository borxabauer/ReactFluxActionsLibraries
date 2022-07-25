import { useContext } from "react"

import { myContext } from "../context/MyContextComponent"
import AddArticles from "../components/AddArticles"
import ArticlesList from "../components/AticlesList"

function Articles () {

    const { states } = useContext(myContext)

    return (
        <>
            <h2>Vista de artículos</h2>
            <AddArticles/>
            <h3>Articles</h3>
            <ArticlesList articles={states.articles}/>
        </>
    )
}

export default Articles