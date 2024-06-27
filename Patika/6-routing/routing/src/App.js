import './App.css';
import {
  BrowserRouter as Router, Route, Link, Routes, createBrowserRouter, RouterProvider
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import User from './components/User';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },
  {
    path:"about",
    element: <About />
  },
  {
    path:"users",
    element: <Users />,
    children:[
      {
        path:"user/:id",
        element: <User />
      }
    ]
  },
  {
    path:"user/:id",
    element: <User />
  },
  
])


function App() {
  return (
    <div className="App">   
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
              {
                router.routes.map((route)=>{
                  return <Route 
                    path={route.path}
                    element={route.element}
                    key={route.id}
                  />
                })
              }
          </Route>
        </Routes>
      </Router>     
    </div>
  );
}


export default App;
