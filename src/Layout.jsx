import { useContext } from "react"
import { Route, Routes, Link } from "react-router-dom"

import { myContext } from "./services/MyContextComponent"

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
                    <ul><Link to={"/"}>Inicio</Link></ul>
                    <ul><Link to={"/users/"}>Usuarios</Link></ul>
                    <ul><Link to={"/articles/"}>Artículos</Link></ul>
                    <ul><Link to={"/sales/"}>Ventas</Link></ul>
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
                <StatesCounter states={{Usuarios: states.users, Artículos: states.articles}}/>
            </footer>
        </>
    )
}

export default Layout