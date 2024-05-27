
import Slikagit from '../git.jpg';
import Slikatw from '../tw.jpg';
import Slikaig from '../ig.jpg';
import Slikawik from '../wiki.jpg';
import { Link } from "react-router-dom";
import LikoviProps from './LikoviProps';

function Likovi() {
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
      <hr></hr>
      <div className='content'>
        <div className='likovi-tekst'>
          <h2>Likovi</h2>
        <p>Olimpska božanstva izgledala su poput muškaraca i žena (iako su se mogla promijeniti u životinje i druge stvari) i bila su - kao što su mnogi mitovi prepričavali - ranjiva na ljudske slabosti i strasti..</p>
        <br></br>
        <p>Grčka mitologija ne govori samo o bogovima i božicama. Ljudski heroji - uključujući Herakloa (zvanog Herkul), pustolova koji je izveo 12 nemogućih djela za kralja Eurystheusa (a kasnije je bio štovan kao bog za svoje postignuće); Pandora, prva žena, čija je znatiželja donijela zlo čovječanstvu; Pigmalion, kralj koji se zaljubio u kip slonovače; Arachne, tkalac koji je zbog svoje arogancije pretvoren u pauka; Trojanski princ Ganymede koji je postao pehar bogova; Midas, kralj sa zlatnim dodirom; Narcis, mladić koji se zaljubio u vlastiti odraz; i Kratos, bog snage i moći – jednako su značajni.</p>
        <br></br>
        <p>Čudovišta i "hibridi" (oblici ljudi i životinja) također se ističu u pričama: krilati konj Pegasus, konj-čovjek Kentaur, lion-woman Sfinga i ptičja žena Harpies, jednooki divovski Kiklop, automati (metalna stvorenja koja je hefest dao), mantikre i jednorozi, Gorgoni, pigmeji, minotauri, satiri i zmajevi svih vrsta. Mnoga od tih stvorenja postala su gotovo jednako poznata kao bogovi, božice i heroji koji dijele svoje priče.</p>
        </div>
      <div className='content-likovi'>
      <LikoviProps></LikoviProps>
      
      </div>
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

export default Likovi;
