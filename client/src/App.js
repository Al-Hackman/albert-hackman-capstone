import './App.css';
import './styles/global.scss';
import { Switch, Route, Link } from "react-router-dom";
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
import CategoryList from './components/CategoryList/CategoryList'
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceList from './components/ServiceList/ServiceList'
import Requestservice from './components/RequestService/RequestService'
import BookService from './components/BookService/BookService'
import ServiceProvided from './components/ServiceProvided/ServiceProvided'
import {withRouter} from 'react-router'



const exclusionArray = [
  '/users/dashboard',
  '/users/dashboard/services',
  "/app/categories",
  "/app/request-service",
  "/app/service-provider",
  "/app/request-service/:id",
  "/app/provided-service"

]



function App( {location} ) {

      return (
        <>
        {exclusionArray.indexOf(location.pathname) < 0 && <Header />}
        <AuthProvider>
        
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

                  <Route path="/app/services">
                      <ServiceList />
                  </Route>

                  

                  <PrivateRoute exact path="/users/dashboard" component={Dashboard} />

                  {/* <Route path="/services">
                      <Services />
                  </Route> */}

                  <PrivateRoute exact path="/users/dashboard/services" component={Services} />

                  <Route path="/app/categories" component={CategoryList} />

                   <Route exact path="/app/request-service" component={Requestservice} />

                   <Route path="/app/service-provider" component={ServiceProviderSignUp} />
                     

                    <Route path="/app/request-service/:id"
                    render={(routerProps) => <BookService  {...routerProps}/>}/>

                    <Route path="/app/provided-service" component={ServiceProvided} />


                </Switch>
          </main> 
          </AuthProvider>
        </>
    );
  }

export default withRouter(App);
