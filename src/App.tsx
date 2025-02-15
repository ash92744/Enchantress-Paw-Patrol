import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { PetList } from './components/petList';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PetDetails } from './components/petDetails';
import { PetAdoptionForm } from './components/PetAdoptionForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import { DonatePetForm } from './components/donatePetForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/petList" element={<PetList />} />
          <Route path="/donatePetForm" element={<DonatePetForm/>} />
          <Route path="/details/:id" element={<PetDetails />}></Route>
          <Route path="/adoptions/:id" element={<PetAdoptionForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
