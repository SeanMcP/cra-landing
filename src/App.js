import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router basename={process.env.REACT_APP_DIRECTORY}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/dashboard">
              <>
                <h1>Dashboard</h1>
                <p>
                  This is some content on the <code>/dashboard</code>!
                </p>
              </>
            </Route>
            <Route path="/">
              <>
                <h1>Home</h1>
                <p>
                  Hello from <code>/</code>, <i>i.e.</i> Home!
                </p>
              </>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
