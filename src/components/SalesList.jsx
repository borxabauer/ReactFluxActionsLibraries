import { useContext } from "react"

import { myContext } from "../context/MyContextComponent"

function SalesList ({sales}) {

    const { states } = useContext(myContext)

    return (
        <>
            {
                sales.length > 0 ?
                    <table>
                        <thead>
                            <tr>
                                <th>Usuario</th><th>Artículo</th>
                            </tr>
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