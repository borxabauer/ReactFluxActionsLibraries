import { useState } from "react";

import useIdsContext from './useIdsContext'

function useSalesContext () {

    const newId = useIdsContext().actions.newId

    const salesState = useState([])

    return {
        states: {
            sales: salesState
        },
        actions: {
            addSale: function (userId, articleId) {
                const [ sales, setSales ] = salesState
                const newSale = {
                    id: newId("sales"),
                    userId: userId,
                    articleId: articleId
                }
                setSales([...sales, newSale])
            }
        }
    }
}

export default useSalesContext