import "./App.css";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AuthState from "./context/auth/authState";
import ContactForm from "./components/Contacts/ContactForm/ContactForm";
import ContactState from "./context/contacts/contactState";
import Contacts from "./components/Contacts/Contacts/Contacts";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <AuthState>
      <ContactState>
        <Header />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/contact-form" component={ContactForm} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </ContactState>
    </AuthState>
  );
}

export default App;
