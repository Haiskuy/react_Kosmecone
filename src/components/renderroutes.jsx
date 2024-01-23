import { Route, Routes } from "react-router-dom"
import { Authdata } from "./authwrapper"
import { path } from "./path"
 
export const RenderRoutes=()=>{
    const {loggedIn}=Authdata( )
    return(
        <Routes>
            {
                path.map((r, i) => {
                    console.log(loggedIn);
                    console.log(r.show);
                    if (loggedIn && r.path !== "/login" && r.path !== "/signin") {
                        console.log("loggedin user");
                        return <Route key={i} path={r.path} element={r.element} />
                    } else if (!loggedIn && r.path !== "/profile") {
                        console.log('im the other one');
                        return <Route key={i} path={r.path} element={r.element} />
                    } else return null;
                })
            }
        </Routes>
    )
}