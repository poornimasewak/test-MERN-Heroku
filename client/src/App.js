import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './component/Header/Header';
import NewStudentForm from './component/NewStudentForm/NewStudentForm';
import Home from './component/Home/Home';

const routes = [
  {
   path: '/',
   exact: true,
   sidebar: () => <div>home</div>,
   main: () => <h1>home</h1>  
  },
  {
   path: '/currentstudent',
   exact: true,
   sidebar: () => <div>currentstudent</div>,
   main: () => <h1>currentstudent</h1>  
  },
  {
   path: '/graduatedstudent',
   exact: true,
   sidebar: () => <div>graduatedstudent</div>,
   main: () => <h1>graduatedstudent</h1>  
  },
  {
   path: '/addnewstudents',
   exact: true,
   sidebar: () => <div>addnewstudents</div>,
   main: NewStudentForm  
  },
  {
   path: '/notmystudents',
   exact: true,
   sidebar: () => <div>notmystudents</div>,
   main: () => <h1>notmystudents</h1>
  }
]

class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
        <Header />
        <div style={{display: 'flex'}}>
          
          {/* <Switch>
            <Route exact path="/" component={Home} />
              
                 <Route exact path="/newstudentform" component={NewStudentForm} /> */}
             
            {/* <Route exact path="/books/:id" component={Detail} /> */}
            {/* <Route component={NoMatch} /> */}
          {/* </Switch> */}
          <div style={{
            padding: '10px',
            width: '20%',
            background: '#45782e'
          }}>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/currentstudent'>currentstudent</Link></li>
            <li><Link to='/graduatedstudent'>graduatedstudent</Link></li>
            <li><Link to='/addnewstudents'>addnewstudents</Link></li>
            <li><Link to='/notmystudents'>notmystudents</Link></li>
          </ul>


          </div>
          <div style={{
            flex: 1,
            padding: '10px',
            width: '40%',
            background: '#2345f7'
          }}>

          {routes.map((route) => (
            <Route
             key={route.path}
             path={route.path}
             exact={route.exact}
             component={route.main}
             />
          ))}
          </div>
        </div>
        </div>
      </Router>
      
     
    );
  }
}

export default App;
