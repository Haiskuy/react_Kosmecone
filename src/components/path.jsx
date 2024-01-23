import Main from '../page/main';
 
import Profile from '../page/profile';
import About from '../page/about';
import Kantin from '../page/kantin';
import Login from '../page/login';
import Signin from '../page/signin';
import Detail from '../page/detail';


export const path=[
    {path: "/",name: "home",element: <Main/>,isprivate:false,show:true},
    {path: "/kantin",name: "home",element: <Kantin/>,isprivate:false,show:true},
    {path: "/about",name: "home",element: <About/>,isprivate:false,show:true},
    {path: "/profile",name: "home",element: <Profile/>,isprivate:true,show:true},
    {path: "/login",name: "home",element: <Login/>,isprivate:false,show:false},
    {path: "/signin",name: "home",element: <Signin/>,isprivate:false,show:false},
    {path: "/detail/:id",name: "home",element: <Detail/>,isprivate:false,show:true},
]