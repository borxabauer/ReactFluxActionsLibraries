import useUsersContext from "./modelsContexts/useUsersContext"
import useArticlesContext from "./modelsContexts/useArticlesContext"
import useSalesContext from "./modelsContexts/useSalesContext"

function useContextData () {

    const usersContext = useUsersContext()
    const [ users ] = usersContext.states.users

    const articlesContext = useArticlesContext()
    const [ articles ] = articlesContext.states.articles

    const salesContext = useSalesContext()
    const [ sales ] = salesContext.states.sales

    return {
        states: {
            users,
            articles,
            sales,
        },
        actions: {
            addUser: usersContext.actions.addUser,
            addArticle: articlesContext.actions.addArticle,
            addSale: salesContext.actions.addSale,
        }
    }
}

export default useContextData