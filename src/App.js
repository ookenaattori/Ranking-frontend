import React from 'react';
import './App.css';
//import Typography from '@material-ui/core/Typography';
import './components/ListRanking';
import ListRanking from './components/ListRanking';
import ListOttelut from './components/ListOttelut';
import logo from './loogo.png';
import Navigator from './components/Navigator';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  console.log(logo);
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-img" src={logo} alt='kuva' />

      </header>

      <BrowserRouter>
        <div>
          <Navigator />
          <Switch>
            <Route exact path="/" component={ListRanking} />
            <Route path="/ListOttelut" component={ListOttelut}/>
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
    //<Typography variant="h4">
    //Seppo Cup ranking
    //</Typography>
  );
}

export default App;
