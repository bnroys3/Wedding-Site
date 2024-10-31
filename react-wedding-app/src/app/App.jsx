import './App.css';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Details from './components/pages/Details';
import Gallery from './components/pages/Gallery';
import Rsvp from './components/pages/Rsvp';
import NoAccess from './components/pages/NoAccess';
import {Route, Routes} from "react-router-dom";
import { useState } from 'react';
import Registry from './components/pages/Registry';

//Main App component
function App() {

    const [page, setPage] = useState('/'); //used to highlight active page on navbar
    const [access, setAccess] = useState(false); //used to direct users to login page
    const [password, setPassword] = useState(""); //used to validate endpoint requests

    // Until access is granted via login, the app will return the NoAccess page, where user can log in.
    if(!access){
        return (
            <div className="App">
                <div>
                    <h1 className="fancy pt-4 pb-2 m-0">Bride & Groom</h1>
                    <NoAccess setAccess={setAccess} password={password} setPassword={setPassword}/>
                </div>
            </div>
        )
    }

    // Once logged in, the app will route to other pages.
    return (
        <div className="App">
            <header className="App-header">
                <NavBar page={page} />
            </header>
            <br></br>
            <h1 className="fancy pt-3 pb-0 m-0">Bride & Groom</h1>
            <div className='inner pt-0 mt-0'>
                <Routes>
                    <Route path="/" element={<Home setPage={setPage} />} />
                    <Route path="/details" element={<Details setPage={setPage} />} />
                    <Route path="/gallery" element={<Gallery setPage={setPage} />} />
                    <Route path="/rsvp" element={<Rsvp setPage={setPage} password={password}/>} />
                    <Route path="/registry" element={<Registry setPage={setPage} />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
