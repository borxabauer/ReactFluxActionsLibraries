import { useContext } from "react"

import { myContext } from "../context/MyContextComponent"
import AddSales from "../components/AddSales"
import SalesList from "../components/SalesList"

function Sales () {

    const { states } = useContext(myContext)

    return (
        <>
            <h2>Vista de ventas</h2>
            <AddSales/>
            <h3>Ventas</h3>
            <SalesList sales={states.sales}/>
        </>
    )
}

export default Sales