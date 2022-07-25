import { useState } from "react";

import useIdsContext from './useIdsContext'

function useArticlesContext() {

    const newId = useIdsContext().actions.newId

    const articlesState = useState([])
    const [ articles, setArticles ] = articlesState

    return {
        states: {
            articles: articlesState
        },
        actions: {
            addArticle: function (article) {
                const newArticle = {
                    id: newId("articles"),
                    name: article
                }
                setArticles([...articles, newArticle])
            },
        }
    }
}

export default useArticlesContext