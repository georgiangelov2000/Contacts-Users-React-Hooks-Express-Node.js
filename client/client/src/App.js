import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AuthState from "./context/auth/authState";
import ContactForm from "./components/Contacts/ContactForm/ContactForm";
import ContactState from "./context/contacts/contactState";
import Contacts from "./components/Contacts/Contacts/Contacts";
import AlertState from "./context/alerts/alertState";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/contact-form" component={ContactForm} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
