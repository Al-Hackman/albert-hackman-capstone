import './App.css';
import './styles/global.scss';
import { Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';


function App() {

      return (
        <>
        <Header />
            <main>
              <Switch>

                  <Route path="/" exact>
                      <HomePage />
                  </Route>

                  {/* <Route path="/users/login">
                      <LoginPage />
                  </Route> */}

                  {/* <Route path="/users/sign-up">
                      <SignUpPage />
                  </Route> */}

              </Switch>
          </main> 
        </>
    );
  }

export default App;
