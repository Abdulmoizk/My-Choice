import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
    import HomePage from "../pages/home";
import AppLayout from "../components/NavLayout";
import Categories from "../pages/Categories";
import SignInSide from "../pages/login";
import SignUp from "../pages/register";
import { useEffect, useState } from "react";
import { auth, onAuthStateChanged } from "./firebase";
import { Spin } from "antd";

function AppRouter(){
    const [loader, setloader] = useState(true)
    const [user, setuser]= useState(false)
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {           
              const uid = user.uid;
              setuser(true)
            } else {
                setuser(false)                           
            }
            setloader(false)
          },[]);
    })
    return(
        <>
       
            
    {loader?
    <div className="p-5 m-5">
        <Spin tip="Loading" size="large">
            <div className="content" />
        </Spin>
    </div>
        :
        <BrowserRouter>
    <Routes>
        <Route path="/" element={user?<AppLayout><HomePage/></AppLayout>: <Navigate to="/login"/>} />  
        <Route path="/home" element={user?<AppLayout><HomePage/></AppLayout>: <Navigate to="/login"/>} />  
        <Route path="/categories" element={user?<AppLayout><Categories/></AppLayout>: <Navigate to="/login"/>} />  
        <Route path="/login" element={user? <Navigate to="/"/> : <SignInSide/>} />  
        <Route path="/signup" element={user? <Navigate to="/"/> :<SignUp/>} />  

    </Routes>
    </BrowserRouter>}
    </> )
}

export default AppRouter;