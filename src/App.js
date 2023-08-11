import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";

const App=()=>{

  return (
    <div>
<Routes>
  <Route path="/" element={<LoginPage/>} />
  <Route path="/home" element={<Home/>} />
  
</Routes>
      
    </div>
  )

}
export default App;