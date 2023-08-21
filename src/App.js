import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import Home from "./components/Homepage/Home";
import { useSelector } from "react-redux";
import styles from './App.module.css'

const App = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className={styles.app}>
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
