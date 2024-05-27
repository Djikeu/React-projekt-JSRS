import Slikabog from '../bogovi.avif';
import Slikasmr from '../smrtnici.avif';
import Slikamed from '../medusa1.avif';
import Slikaolim from '../olimpi.avif';
import Slikaoruzje from '../oruzje.jpg';
import Slikakl1 from '../klasik.jpg';
import Slikakl2 from '../kl2.jpg';
import Slikakl3 from '../neb.jpg';
import Slikad1 from '../des1.jpg';
import Slikad2 from '../des2.jpg';
import Slikad3 from '../des4.jpg';

import Slikagit from '../git.jpg';
import Slikatw from '../tw.jpg';
import Slikaig from '../ig.jpg';
import Slikawik from '../wiki.jpg';
import { Link } from "react-router-dom";

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
      <hr></hr>
      <div className="content">
        <div className="o-mitologiji">
          <h2>O Mitologiji </h2>
          <div className='opcenito-naslovi'>
          <div className="naslovi">
            <h3>Općenito</h3>
            <h3>Koraci u nastanku</h3>
            <h3>Izvori</h3>
          </div>
          <div className="sadrzaj-mt">
            <div className="opcenito">
              <p>Starogrčka mitologija je jedna od najvećih skupina legendi o bogovima i božicama, herojima, čudovištima i ratnicima , koji su bili važan dio svakodnevnog života u drevnom svijetu. Grčki mitovi objašnjavali su sve, od vjerskih rituala do vremena, i davali značenje svijetu koji su ljudi vidjeli oko sebe. Iako su mnogi od tih mitova maštovite priče, poput legendi o pohlepnom kralju Midi ili herojskom Herkulu, druge priče poput epa o Trojanskom ratu imaju osnovu u povijesnim činjenicama, koje se dan danas tumače i istražuju.</p>
            </div>
            <div className="izvori">
              <p>Oko 700. godine prije Krista, teogonija pjesnika Hesioda ponudila je prvu pisanu kozmogoniju, ili priču o podrijetlu, grčke mitologije. Teogonija priča priču o putovanju svemira iz ništavila (Kaos, iskonska praznina) u biće i detaljno opisuje razrađeno obiteljsko stablo elemenata, bogova i božica koji su evoluirali iz kaosa i potekli iz Gaie (Zemlje), Ouranosa (Nebo), Pontosa (More) i Tartarosa (Podzemlje). Kasnije su grčki pisci i umjetnici koristili i razrađivali te izvore u vlastitom djelu. Na primjer, mitološke figure i događaji pojavljuju se u dramama Eshila, Sofokla i Euripida iz 5. stoljeća i lirskim pjesmama Pindara. Pisci poput grčkog mitografa Apolodora iz Atene iz 2. stoljeća prije Krista i rimskog povjesničara iz 1. stoljeća prije Krista Gaja Julija Hyginusa sastavili su drevne mitove i legende za suvremenu publiku.
              </p>
            </div>
            <div className="izvori2">
              <p>Ne postoji niti jedan izvorni tekst, poput kršćanske Biblije ili hinduističkih Veda, koji uvodi likove i priče svih grčkih mitova. Umjesto toga, najraniji grčki mitovi bili su dio usmene tradicije koja je započela u brončano doba, a njihovi zapleti i teme postupno su se odvijali u pisanoj literaturi arhaičnih i klasičnih razdoblja drevnog mediteranskog svijeta.
                Epovi pjesnika Homera iz 8. stoljeća prije Krista, Ilijada i Odiseja, na primjer, pričaju priču o Trojanskom ratu kao božanskom sukobu, kao i ljudskom. Oni, međutim, ne pokušavaju predstaviti bogove i božice koji su njihovi glavni likovi, jer bi čitatelji i slušatelji već bili upoznati s njima.</p>

            </div>
          </div>
          </div>
          <div className="osobe-mitologije">
            <div className="kartice">
              <div className="card">
                <h3 className='naslovi-imena'>Olimpijanci</h3>
                <img src={Slikaolim} alt="Olimpijanci"></img>
                <p>Dvanaest olimpijaca sastoji se od većine glavnih bogova i božica grčkog panteona. Besmrtnici koji su vladali svojim ljudskim podanicima s visine, stalno su se borili, zavaravali i imali afere jedni s drugima, često sa strašnim posljedicama.</p>
              </div>
              <div className="card">
                <h3 className='naslovi-imena'>Bogovi</h3>
                <img src={Slikabog} alt="Bogovi"></img>
                <p>Grčki bogovi vladali su svim aspektima helenskog postojanja – od rata do ljubavi, od porođaja do zagrobnog života. Obično prikazani u ljudskom obliku, bili su hirovita božanstva koja su zahtijevala štovanje i žrtvu kako bi spriječila nesreću i propast.</p>
              </div>
              <div className="card">
              <h3 className='naslovi-imena'>Smrtnici</h3>
                <img src={Slikasmr} alt="Smrtnici"></img>
                <p>Dvanaest olimpijaca sastoji se od većine glavnih bogova i božica grčkog panteona. Besmrtnici koji su vladali svojim ljudskim podanicima s visine, stalno su se borili, zavaravali i imali afere jedni s drugima, često sa strašnim posljedicama.</p>
              </div>
            </div>
            <div className='kartice2'>
            <div className='card2'>
            <h3 className='naslovi-imena'>Mitološka bića</h3>
            <img src={Slikamed}></img>
            <p>Grčka mitologija puna je čudnih i često zastrašujućih stvorenja, od kojih su neka rođena na samom početku kozmosa. Mnoga od tih stvorenja terorizirala su smrtnike dok ih nisu ubili hrabri bogovi ili heroji.</p>
            </div>
            <div className='card2'>
            <h3 className='naslovi-imena'>Sveti predmeti / oružja</h3>
            <img src={Slikaoruzje}></img>
            <p>Grčka mitologija obiluje simboličkim predmetima i konceptima koji imaju značajnu važnost unutar mitova, od kojih svaki ima duboka značenja i kulturni značaj. Ovi simboli odražavaju vjerovanja i iskustva starogrčkog društva, nudeći uvid u razumijevanje svijeta i ljudskog stanja.</p>
            </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className='banner'>
        </div>
        <hr></hr>
        <div className='banner-text'>
        <h2>Nastanak mitova u literaturi</h2>
        <p>Grčka mitologija je tijelo rada koje detaljno opisuje podrijetlo drevnog helenskog svijeta i mnoga božanstva koja su njime vladala. Uključuje povijest bogova i božica, heroja i čudovišta, kao i objašnjenja za mnoge važne vjerske rituale.</p>
        <br></br>
        <p>Likovi, priče, teme i lekcije grčke mitologije oblikovali su umjetnost i književnost tisućama godina. Pojavljuju se na renesansnim slikama kao što su Botticellijevo rođenje Venere i Raphaelov trijumf Galateje i spisi poput Danteovog pakla; Romantična poezija i libretti; i mnoštvo novijih romana, predstava i filmova. Velik dio mitologije zabilježen je u D'Aulairesovoj knjizi grčkih mitova, objavljenoj 1962. godine, a i danas je u tisku.</p>
        </div>
        <div className='banner-galerija'>
          <div className='lijevo'>
             <div className='lijevo-1'><img src={Slikakl2}></img></div>
             <div className='lijevo-2'><img src={Slikakl1}></img></div>
             <div className='lijevo-3'><img src={Slikakl3}></img></div>
          </div>
          <div className='sredina'>
             <p>Grčki mitovi u početku su se propagirali u usmeno-pjesničkoj tradiciji koju su najvjerojatnije uzgajali minojski i mikenski pjevači počevši od 18. stoljeća prije Krista.</p>
             <br></br>
             <p>Na kraju su mitovi o junacima Trojanskog rata i njegovim posljedicama postali dio usmene tradicije Homerovih epskih pjesama, Ilijade i Odiseje. Dvije Homerove pjesme u blizini suvremenog Hesioda, Teogonija i djela i dane, sadrže zapise o genezi svijeta, sukcesiji božanskih vladara, slijedu ljudskog doba</p>
             <br></br>
             <p>Osim ovog narativnog ležišta u starogrčkoj književnosti, slikovni prikazi bogova, junaka i mitskih epizoda istaknuti su na drevnim vaznim slikama i ukrašavanju zavjetnih darova i mnogih drugih artefakata. </p>
             <br></br>
             <p>Geometrijski dizajni na lončarstvu osmog stoljeća prije Krista prikazuju prizore iz Epskog ciklusa, kao i Heraklove avanture. U sljedećim arhaičnim, klasičnim i helenističkim razdobljima pojavljuju se homerske i razne druge mitološke scene koje nadopunjuju postojeći književni dokazi. </p>
          </div>
          <div className='desno'>
             <div className='lijevo-1'><img src={Slikad1}></img></div>
             <div className='lijevo-2'><img src={Slikad2}></img></div>
             <div className='lijevo-3'><img src={Slikad3}></img></div>
          </div>
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

export default Naslovna;