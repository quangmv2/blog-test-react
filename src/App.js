import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import routes from './router/router.config';
import PrivatePage from './pages/PrivatePage';

function App() {
  return (
    <Router>
        <Switch>
          {
            routes.map((route) => (
              <Route key={`path${route.path}`} path={route.path} exact 
              component={route.isProtected?PrivatePage(()=><route.component title={route.title} />)
              :()=><Suspense fallback={<div>Loading...</div>}><route.component title={route.title} /></Suspense>} />
            ))
          }
        </Switch>
    </Router>
  );
}

export default App;
