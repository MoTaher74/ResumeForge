import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import { Dashboard, EditResume, LandingPage , LoginPage , SignUp } from "./pages/exportedFile.js";
const App =() =>{

  return(
    <>
    <div>
    <Router>
      <Routes>
{/** Default Route */}
    <Route path="/" element={<LandingPage/>}/>
    {/* <Route path="/login" element={<LoginPage/>}/>
    <Route path="/signup" element={<SignUp/>}/> */}
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/resume/:resumeId" element={<EditResume/>}/>

      </Routes>
    </Router>
    </div>

    <Toaster toastOptions={{
      className:"",
      style:{borderRadius:"10px",fontSize:"16px"}
    }}
    />
    </>
  )
}

export default App;
