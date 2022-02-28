import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Currency from './pages/currency/Currency';
import MeasurementsUnits from './pages/measurements-units/MeasurementsUnits';

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/currency" element={ <Currency/> }/>
                <Route path="/mu" element={ <MeasurementsUnits/> }/>
            </Routes>
        </>
    );
};

export default App;
