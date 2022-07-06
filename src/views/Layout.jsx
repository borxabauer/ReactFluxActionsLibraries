import { Route, Routes, Link } from "react-router-dom"
import { useContext } from "react"

import { myContext } from "../services/Context"

import Home from "./Home"
import Users from "./Users"
import Articles from "./Articles"

function Layout () {

    const { states } = useContext(myContext)

    return (
        <>
            <h1>Your app.</h1>
            <nav>
                <ul><Link to={"/"}>Home</Link></ul>
                <ul><Link to={"/users/"}>Users</Link></ul>
                <ul><Link to={"/articles/"}>Articles</Link></ul>
            </nav>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/users/"} element={<Users/>}/>
                <Route path={"/articles/"} element={<Articles/>}/>
            </Routes>
            <footer>
                <hr/>
                <p>Usuarios existentes:{states.users.length}</p>
                <p>Artículos existentes:{states.articles.length}</p>
            </footer>
        </>
    )
}

export default Layout