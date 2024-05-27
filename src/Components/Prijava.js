
import Slikagit from '../git.jpg';
import Slikatw from '../tw.jpg';
import Slikaig from '../ig.jpg';
import Slikawik from '../wiki.jpg';
import { Link } from "react-router-dom";
import Prijavaform from './Prijava-form';

function Naslovna() {
    return (
        <div className="App">
            <div className="header">
                <h1>Grčka Mitologija</h1>
                <nav>
                    <ul id="navbar" className="linkovi">
                        <li><Link to="/">O mitologiji</Link></li>
                        <li><Link to='/Likovi'>O Bogovima i herojima</Link></li>
                        <li><Link to='/Mitovi'>Mitovi </Link></li>
                        <li><Link to='/Mapa'>Mapa </Link></li>
                        <li><Link to='/Prijava'>Prijava</Link></li>
                    </ul>
                </nav>
            </div>
            <hr className='hr1'></hr>
            <div className="h-img">
                <div className="header-text">
                    <h2>Dobrodošli u Svijet Grčke Mitologije</h2>
                    <br></br>
                    <p>Istražite priče bogova, heroja i čudovišta iz drevne Grčke</p>
                </div>
            </div>
            <div className='content-prijava'>
                <h2>Prijavite se </h2>
                <hr className='hr-mid'></hr>
                <div className='prijava'>
                    <Prijavaform></Prijavaform>
                </div>
            </div>
            <hr></hr>
            <div className='banner'>
            </div>
            <hr></hr>
            <div className="footer-out">
                <h2>Grčka Mitologija</h2>
                <div className='footer'>
                    <div className="red1">
                        <h3>Povijest</h3>
                        <p>Nove informacije</p>
                        <p>Zaprati me:</p>
                        <div className='ikone'>
                            <a href='https://github.com/Djikeu'><img src={Slikagit}></img></a>
                            <img src={Slikatw}></img>
                            <img src={Slikaig}></img>
                            <a href='https://en.wikipedia.org/wiki/Greek_mythology'> <img src={Slikawik}></img> </a>
                        </div>
                    </div>
                    <div className="red2">
                        <h3>Dijelovi</h3>
                        <p>Početna</p>
                        <p>Mapa</p>
                        <p>Registracija</p>
                    </div>
                    <div className="red3">
                        <h3>Stranicu izradio: Mario Radman G2P</h3>
                        <h4>Namijenjeno isključivo u svrhe projekta</h4>
                        <a href='https://mythopedia.com/'><p>Izvor za tekst ; Izvor 1</p> </a>
                        <a href='https://www.greekmythology.com/Myths/myths.html'><p>Izvor za slike; Izvor 2</p></a>
                    </div>
                </div>
                <p className='prava'>© 2024, Grčka Mitologija. Sva prava pridržana.</p>
            </div>
            <div className='dno'>
            </div>
        </div>
    );
}

export default Naslovna;