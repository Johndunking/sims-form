import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormComponent from './Components/home/FormComponent';
import BehaviorContract from './Components/BC/BehaviorContract';
import Cico from './Components/CICO/Cico';
import Cp from './Components/CP/Cp';
import Ppr from './Components/PPR/Ppr';
import Sg from './Components/SG-SET/Sg';
import Shn from './Components/SHN/Shn';
import Sm from './Components/SM/Sm';
import Reasses from './Components/Reasses/Reasses';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<FormComponent />} />
        <Route path="BC" element={<BehaviorContract />} />
        <Route path="Cico" element={<Cico />} />
        <Route path="Cp" element={<Cp />} />
        <Route path="Ppr" element={<Ppr />} />
        <Route path="Sg" element={<Sg />} />
        <Route path="Shn" element={<Shn />} />
        <Route path="Sm" element={<Sm />} />
        <Route path="Reasses" element={<Reasses />} />
      </Routes>
      </Router>
    </>
  );
};

export default App;
