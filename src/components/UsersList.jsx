function UserList ({users}) {
    return (
        <ul>
            {
                users.length > 0 ?
                    users.map(
                        (user) => <li key={user.id}>{user.name}</li>
                    )
                :
                    <li>No existen usuarios.</li>
            }
        </ul>
    )
}

export default UserList