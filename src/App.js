import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import Home from "./components/Home";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <Routes>
        { !user && <Route
          path="/"
          element={ <LoginPage />}
        />}
        { user && <Route
          path="/"
          element={  <Home /> }
        />}
      </Routes>
    </div>
  );
};

export default App;
