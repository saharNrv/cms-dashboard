import Products from "./Components/Products/Products";
import Home from "./Components/Home/Home.jsx";
import Comments from "./Components/Comments/Comments";
import Users from './Components/Users/Users';


const router=[

    {path:'/',element:<Home/>},
    {path:'/products',element:<Products/>},
    {path:'/comments',element:<Comments/>},
    {path:'/users',element:<Users/>},
]

export default router