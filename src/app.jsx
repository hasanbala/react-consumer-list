import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AddUser, UpdateUser } from "./forms";
import { Navbar, NotFound } from "./pages";
import { Users } from "./components";
import "alertifyjs/build/css/alertify.min.css";
import "./styles/app.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar header="React Consumer List" />
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/add" component={AddUser} />
          <Route path="/update/:id" component={UpdateUser} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
