
import Mapasl from '../edited.jpg';
import Slikagit from '../git.jpg';
import Slikatw from '../tw.jpg';
import Slikaig from '../ig.jpg';
import Slikawik from '../wiki.jpg';
import Slikalab from '../labi.jpg';
import Slikapod from '../podzemlja.jpg';
import Slikatart from '../tarta.jpg';
import React, { useState } from 'react';

import { Link } from "react-router-dom";
function Mapa() {
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupContenth3, setPopupContenth3] = useState('');
    const [popupContent, setPopupContent] = useState('');
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  
    const handleDivClick = (popupContenth3, content, top, left) => {
      setPopupContenth3(popupContenth3);
      setPopupContent(content);
      setPopupPosition({ top, left });
      setPopupVisible(true);
    };
  
    const popupData = [
      { className: 'mt1', popupContenth3:'Atena',content: 'Sveti grad izgrađen u čast božice Atene', top: 334, left: 697 },
      { className: 'mt2', popupContenth3:'Korint',content: 'Sveti grad izgrađen u čast boga Posejdona', top: 334, left: 615 },
      { className: 'mt3', popupContenth3:'Samos',content: 'Sveti grad izgrađen u čast božice Here', top: 344, left: 915 },
      { className: 'mt4', popupContenth3:'Efez',content: 'Sveti grad izgrađen u čast božice Artemis', top: 306, left: 973 },
      { className: 'mt5', popupContenth3:'Rhodes',content: 'Sveti grad izgrađen u čast boga Heliosa', top: 501, left: 1015 },
      { className: 'mt6', popupContenth3:'Dodona',content: 'Proročište Zeusa', top: 157, left: 453 },
      { className: 'mt7', popupContenth3:'Cythera',content: 'Sveti grad izgrađen u čast božice Afrodite', top: 501, left: 637 },
      { className: 'mt8', popupContenth3:'Sparta',content: 'Sveti grad izgrađen u čast Dioskuri (Ricinus i Polydeuces)', top: 409, left: 603 },
      { className: 'mt9', popupContenth3:'Samos',content: 'Sveti grad izgrađen u čast božice Here', top: 364, left: 601 },
      { className: 'mt10', popupContenth3:'Delpi',content: 'Proročište Apolona', top: 276, left: 607 },
      { className: 'mt11', popupContenth3:'Delos',content: 'Sveti grad izgrađen u čast boga Apola', top: 384, left: 790 },
      { className: 'mt12', popupContenth3:'Planina Olimpus',content: 'Legendarni dom bogova i božica olimpijaca', top: 120, left: 560 }
    ];
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
      <div className='content-mapa'>
      <h2>Mapa prikaza svetih i važnih mjesta</h2>
      <p>U središtu grčke mitologije je panteon bogova i božica za koje se govorilo da žive na planini Olimp, najvišoj planini u Grčkoj.</p>
      <p> Sa svog uzvišenog prijestolja, vladali su svakim aspektom ljudskog života.</p>
      <div className='mapa'>
        <img src={Mapasl} alt="Mapa" />
        {popupData.map((item, index) => (
          <div
            key={index}
            className={`${item.className} clickable-div`}
            onClick={() => handleDivClick(item.popupContenth3, item.content, item.top, item.left)}
            style={{ top: `${item.top}px`, left: `${item.left}px` }}
          ></div>
        ))}
        {popupVisible && (
          <div
            className="popup"
            style={{ top: `${popupPosition.top}px`, left: `${popupPosition.left}px` }}
          >
            <h3>{popupContenth3}</h3>
            <p>{popupContent}</p>
            <button onClick={() => setPopupVisible(false)}>Zatvori</button>
          </div>
        )}
      </div>
       <div className='legenda'>
          <table>
            <tr>
            <th>Boja</th>
            <th className='table-b'>Značenje</th>
            </tr>
            <tr>
            <td><div className='zuti'></div>Narančasta</td>
            <td className='table-b'>Sveta planina - dom grčkih bogova</td>
            </tr>
            <tr>
              <td><div className='narancasta'></div>Žuta</td>
              <td className='table-b'>Sveti gradovi - prestolja / utvrde u čast bogova</td>
            </tr>
            <tr>
            <td><div className='crvena'></div>Crvena</td>
              <td className='table-b'>Proročišta -  sveto mjesto u kojem su svećenici tumačili volju bogova</td>
            </tr>
          </table>
        </div>
    </div>
    <hr></hr>
    <div className='banner-mapa'>
      <div className='banner-mapa1'></div>
      <div className='banner-mapa2'></div>
    </div>
    <div className='mjesta'>
      <h2>Mjesta grčke mitologije</h2>
      <div className='red-mjesta1'>
       <div className='item'>
        <h3>Labirint kralja Minosa</h3>
        <img src={Slikalab}></img>
        <br/>
        <hr className='itemhr'></hr>
        <br/>
        <p>U grčkoj mitologiji Labirint je bio razrađena, zbunjujuća građevina koju je dizajnirao i izgradio legendarni umjetnik Daedalus za kralja Minosa s Krete u Knossosu. Njegova je funkcija bila držati Minotaura, čudovište koje je na kraju ubio junak Tezej. Daedalus je tako lukavo napravio Labirint da mu je jedva mogao pobjeći nakon što ga je sagradio uz dizajn s jednim stazom bez grananja ili slijepih ulica. </p>
       </div>
       <div className='item'>
        <h3>Podzemlje</h3>
        <img src={Slikapod}></img>
        <br/>
        <hr className='itemhr'></hr>
        <br/>
        <p>Skriven duboko u utrobi zemlje i kojim su vladali bog Had i njegova supruga Perzefon, Podzemlje je bilo kraljevstvo mrtvih u grčkoj mitologiji, mjesto bez sunca gdje su duše onih koji su umrli otišle nakon smrti. Zaliveno potocima pet rijeka, podijeljeno u 4 regije, Prema Homeru, Podzemlje se nalazilo izvan rijeke Oceana koja okružuje zemlju, na krajnjem zapadnom kraju svijeta. </p>
       </div>
       <div className='item'>
        <h3>Tartarus</h3>
        <img src={Slikatart}></img>
        <br/>
        <hr className='itemhr'></hr>
        <br/>
        <p>U grčkoj mitologiji, Tartar je duboki ponor koji se koristi kao tamnica muke i patnje za zle i kao zatvor za Titane. Tartar je mjesto gdje se, prema Platonovim Gorgijama (oko 400. pr. godine), dušama sudi nakon smrti i gdje su opaki dobili božansku kaznu. Tartar se pojavljuje u ranoj grčkoj kozmologiji, gdje je personificirani Tartar opisan kao jedan od najranijih bića koja postoje, uz Kaos i Gaia-u.</p>
       </div>
      </div>
    </div>
    <div className='tekst-mjesta'>
      <h2>Istraživanja</h2>
      <p>Otkriće mikenske civilizacije njemačkog arheologa amatera Heinricha Schliemanna u devetnaestom stoljeću i otkriće minojske civilizacije na Kreti od strane britanskog arheologa Arthura Evansa u dvadesetom stoljeću, pomoglo je objasniti mnoga postojeća pitanja o Homerovim epovima i pružilo arheološke dokaze za mnoge mitološke detalje o bogovima i herojima.</p>
      <br></br>
      <p>Dokazi o mitovima i ritualima na mikenskim i minojskim nalazištima su potpuno monumentalni.</p>
      <br></br>
      <p>Geometrijski dizajni na lončarstvu osmog stoljeća prije Krista prikazuju scene iz trojanskog ciklusa, kao i avanture Herakla.  Ovi vizualni prikazi mitova važni su iz dva razloga. Prvo, mnogi grčki mitovi svjedoče se na vazama ranije nego u književnim izvorima: od dvanaest Heraklovih djela, na primjer, samo se Cerberusova avantura događa u suvremenom književnom tekstu.</p>
    </div>
    <hr></hr>
    <div className='banner-mapa3'>
      <div className='banner3-slika1'/>
      <div className='banner3-slika2'/>
    </div>
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


export default Mapa;
