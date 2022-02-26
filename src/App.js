import Main from "./pages/Main";
import { Route, Switch } from "react-router-dom";
import Category from "./pages/Category/Category"; 
import Reciepe from "./Components/Reciepe/Reciepe";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path="/category/:name" component={Category}/>
        <Route path="/:id" component={Reciepe}/>
      </Switch>
     </div>
  );
}
export default App;
