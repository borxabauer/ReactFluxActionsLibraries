import { useState } from "react"

function useIdsContext () {

    const idsState = useState({})
    const [ ids, setIds ] = idsState

    return {
        states: {
            ids: idsState
        },
        actions: {
            newId: function (stateName) {
                const newIds = {...ids}
                newIds[stateName] = newIds.hasOwnProperty(stateName) ? newIds[stateName]+1 : 0
                setIds(newIds)
                return newIds[stateName]
            }
        }
    }
}

export default useIdsContext