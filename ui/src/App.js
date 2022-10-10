import {ContactType} from './ContactType'
import {ListContact} from './ListContact'
import {BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <div className="App container">
       <h3 className="d-flex justify-content-center m-3">
          ContactList
       </h3>
       <nav className="navbar navbar-expand-sm bg-light navbar-dark">
         <ul className="navbar-nav">
          
           <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/contacttype">
               Contact Types
            </NavLink>
            </li>
            <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/listcontact">
               Contact List
            </NavLink>
            </li>
           
         </ul>
       </nav>
       <Switch>
          <Route path='/contacttype' component={ContactType}/>
          <Route path='/listcontact' component={ListContact}/>
       </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
