import { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <Fragment>
            <NavBar />
            </Fragment>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;