function ArticlesList ({articles}) {
    return (
        <ul>
            {
                articles.length > 0 ?
                    articles.map(
                        (item) => <li key={item.id}>{item.name}</li>
                    )
                :
                    <li>No existen usuarios.</li>
            }
        </ul>
    )
}

export default ArticlesList