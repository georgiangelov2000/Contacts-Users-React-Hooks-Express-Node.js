import "./App.css";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/Contacts/ContactForm/ContactForm";
import Dashboard from "./components/Dashboard/Dashboard"
import AuthState from "./context/auth/authState";
import ContactState from "./context/contacts/contactState";
import AlertState from "./context/alerts/alertState";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <AuthState>
      <ContactState>
        <AlertState>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/contact-form" component={ContactForm} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
          <Footer />
        </AlertState>
      </ContactState>
    </AuthState>
    </div>
  );
}

export default App;
