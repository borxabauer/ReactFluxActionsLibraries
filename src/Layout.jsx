import { useContext } from "react"
import { Route, Routes, Link } from "react-router-dom"

import { myContext } from "./context/MyContextComponent"

import Home from "./views/Home"
import Users from "./views/Users"
import Articles from "./views/Articles"
import StatesCounter from "./components/StatesCounter"
import Sales from "./views/Sales"

function Layout () {

    const { states } = useContext(myContext)

    return (
        <>
            <h1>Tu aplicación</h1>

            <header>
                <nav>
                    <ul>
                        <li><Link to={"/"}>Inicio</Link></li>
                        <li><Link to={"/users/"}>Usuarios</Link></li>
                        <li><Link to={"/articles/"}>Artículos</Link></li>
                        <li><Link to={"/sales/"}>Ventas</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/users/"} element={<Users/>}/>
                    <Route path={"/articles/"} element={<Articles/>}/>
                    <Route path={"/sales/"} element={<Sales/>}/>
                </Routes>
            </main>

            <footer>
                <hr/>
                <h3>Contadores</h3>
                <StatesCounter states={{Usuarios: states.users, Artículos: states.articles, Ventas: states.sales}}/>
            </footer>
        </>
    )
}

export default Layout