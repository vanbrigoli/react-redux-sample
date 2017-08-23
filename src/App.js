import React from 'react';
import Navbar from './components/Navbar';

const App = ({children}) => {
    return (
        <div>
            <Navbar/>
            { children }
        </div>
    )
};

export default App;
