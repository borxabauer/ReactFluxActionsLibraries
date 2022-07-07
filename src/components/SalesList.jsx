import { useContext } from "react"

import { myContext } from "../services/MyContextComponent"

function SalesList ({sales}) {

    const { states } = useContext(myContext)

    return (
        <>
            {
                sales.length > 0 ?
                    <table>
                        <thead>
                            <th>Usuario</th><th>Artículo</th>
                        </thead>
                        <tbody>
                            {sales.map(
                                (sale) => <tr key={sale.id}>
                                    <td>{states.users.find( user => user.id === sale.userId ).name}</td>
                                    <td>{states.articles.find( article => article.id === sale.articleId ).name}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                :
                    <p>No existen ventas.</p>
            }
        </>
    )
}

export default SalesList