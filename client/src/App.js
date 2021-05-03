import './App.css';
import './styles/global.scss';
import { Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import SignIn from './components/SignIn/SignIn';


function App() {

      return (
        <>
        <Header />
            <main>
              <Switch>

                  <Route path="/" exact>
                      <HomePage />
                  </Route>

                  <Route path="/users/sign-in">
                      <SignIn />
                  </Route>

                  {/* <Route path="/users/sign-up">
                      <SignUpPage />
                  </Route> */}

              </Switch>
          </main> 
        </>
    );
  }

export default App;
