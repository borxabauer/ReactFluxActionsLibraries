import { useState } from 'react'

import useIdsContext from './useIdsContext'

function useUsersContext () {

    const newId = useIdsContext().actions.newId

    const usersState = useState([])
    const [ users, setUsers ] = usersState

    return {
        states: {
            users: usersState
        },
        actions: {
            addUser: function (user) {
                const newUser = {
                    id: newId("users"),
                    name: user
                }
                setUsers([...users, newUser])
            },
        }
    }
}

export default useUsersContext