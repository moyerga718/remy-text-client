import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { Authorized } from "./Authorized"
import { Home } from "../home/Home"
import { NewGame } from "../new_or_load/NewGame"
import { LoadGame } from "../new_or_load/LoadGame"
import { Game } from "../game/Game"
import { GameContainer } from "../game/GameContainer"
import { About } from "../about/About"

export const ApplicationViews = ({ token, setToken, setUserId, userId, setUsername, username }) => {
    return <Routes>
        {/* <Route path="/" element={} /> */}
        <Route path="/login" element={<Login setToken={setToken} setUserId={setUserId} setUsername={setUsername}/>} />
        <Route path="/register" element={<Register setToken={setToken} setUserId={setUserId} setUsername={setUsername}/>} />
        <Route path="/" element={<Home token={token} setToken={setToken} username={username} setUsername={setUsername}/>} />
        <Route path="/about" element={<About />} />
        <Route element={<Authorized token={token} />}>
            <Route path="/" element={<Home token={token} setToken={setToken} username={username} setUsername={setUsername}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/new" element={<NewGame userId={userId}/>} />
            <Route path="/load" element={<LoadGame userId={userId}/>} />
            <Route path="/game/:gameId" element={<GameContainer />} />
        </Route>
    </Routes>
}