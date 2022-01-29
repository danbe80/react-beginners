import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
  <Router>
    <Switch>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">{/* Home으로 가는 Route */}
        <Home />
      </Route>
    </Switch>
  </Router>  
  )
}

export default App;
