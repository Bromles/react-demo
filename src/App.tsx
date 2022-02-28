import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Home from './pages/home/Home';

const App = () => {
    const Currency = React.lazy(() => import('./pages/currency/Currency'));
    const MeasurementsUnits = React.lazy(() => import('./pages/measurements-units/MeasurementsUnits'));

    return (
        <>
            <Navbar/>
            <React.Suspense fallback={ <span>Loading...</span> }>
                <Routes>
                    <Route path="/" element={ <Home/> }/>
                    <Route path="/currency" element={ <Currency/> }/>
                    <Route path="/mu" element={ <MeasurementsUnits/> }/>
                </Routes>
            </React.Suspense>
        </>
    );
};

export default App;
