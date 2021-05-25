import "./App.css";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AuthState from "./context/auth/authState";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <AuthState>
      <Header />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </AuthState>
  );
}

export default App;
