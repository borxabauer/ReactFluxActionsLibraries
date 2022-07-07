import { useState } from "react"

function useContextData () {

    const [ users, setUsers ] = useState([])
    const [ articles, setArticles ] = useState([])
    const [ sales, setSales ] = useState([])
    const [ ids, setIds ] = useState({})

    return {
        states: {
            users,
            articles,
            sales,
            ids
        },
        actions: {
            addUser: function (user) {
                const newUser = {
                    id: this.newId("users"),
                    name: user
                }
                setUsers([...users, newUser])
            },
            addArticle: function (article) {
                const newArticle = {
                    id: this.newId("articles"),
                    name: article
                }
                setArticles([...articles, newArticle])
            },
            addSale: function (userId, articleId) {
                const newSale = {
                    id: this.newId("sales"),
                    userId: userId,
                    articleId: articleId
                }
                setSales([...sales, newSale])
            },
            newId: function (stateName) {
                const newIds = {...ids}
                newIds[stateName] = newIds.hasOwnProperty(stateName) ? newIds[stateName]+1 : 0
                setIds(newIds)
                return newIds[stateName]
            },
        }
    }
}

export default useContextData