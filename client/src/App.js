import './App.css';
import './styles/global.scss';
import { Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ServiceProviderSignUp from './components/ServiceProviderSignUp/ServiceProviderSignUp';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import Services from './components/Services/Services';



function App() {

      return (
        <>
        <AuthProvider>
        <Header />
            <main>
              <Switch>

                  <Route path="/" exact>
                      <HomePage />
                  </Route>

                  <Route path="/users/sign-in">
                      <SignIn />
                  </Route>

                  <Route path="/users/new-password">
                      <ForgotPassword />
                  </Route>

                  <Route path="/users/sign-up">
                      <SignUp />
                  </Route>

                  <Route path="/service-providers/sign-up">
                      <ServiceProviderSignUp />
                  </Route>

                  <PrivateRoute exact path="/users/dashboard" component={Dashboard} />

                  {/* <Route path="/services">
                      <Services />
                  </Route> */}

                  <Route path="/services" component={Services} />

                  {/* <Route path="/users/sign-up">
                      <SignUpPage />
                  </Route> */}

              </Switch>
          </main> 
          </AuthProvider>
        </>
    );
  }

export default App;
