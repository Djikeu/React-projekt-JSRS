
import Slikagit from '../git.jpg';
import Slikatw from '../tw.jpg';
import Slikaig from '../ig.jpg';
import Slikawik from '../wiki.jpg';
import Slikaeros from '../eros.jpg';
import Aegis from '../aegis.jpg';
import Runo from '../runo.jpg';
import Stit from '../stit.jpg';
import Ogrlica from '../ogrlica.jpg';

import Slikaage from '../age.jpg';

import { Link } from "react-router-dom";
function Mitovi() {
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
        <h2 className='mitovipredmetih2'>Sveti predmeti</h2>
          <div className='predmeti'>
            <div className='predmeti-item'>
              <div className='tekst-predmeti'>
              <h2>Aegis/Egida</h2>
              <p>Egida je štit koji je prvenstveno nosio Zeus u grčkoj mitologiji, koji je ponekad posuđivao Ateni. </p>
              <p>Prema drugim izvorima, to nije bio štit, već životinjska koža koja se nosila preko odjeće bogova kao dodatna zaštita. Nosio je glavu Gorgona i ispuštao užasan zvuk buke tijekom bitke. </p>
              </div>
              <div className='slika-predmeti'>
              <img src={Aegis}></img>
              </div>
            </div>

            <div className='predmeti-item'>
              <div className='tekst-predmeti'>
              <h2>Zlatno runo</h2>
              <p>Zlatno runo bilo je runo zlatnog ovna koje se održavalo u Colchisu i predmet želje za Jasonom, koji je organizirao ekspediciju s Argonautima kako bi je preuzeo.</p>
              <p> Kralj Aeetes smjestio je zlatno runo u vrt koji je čuvao zmaj koji nikada nije spavao. Jason je kasnije stigao u Colchis, a nakon što je uspješno završio tri zadatka koja mu je Aeetes dao, dohvatio je zlatno runo.</p>
              </div>
              <div className='slika-predmeti'>
              <img src={Runo}></img>
              </div>
            </div>
          </div>
          <div className='predmeti'>
            <div className='predmeti-item'>
              <div className='tekst-predmeti'>
              <h2>Ahilov štit</h2>
              <p>Ahilov štit je štit koji je grčki junak koristio tijekom dvoboja protiv Hectora, princa Troje, pred kraj Trojanskog rata. </p>
              <p>Ahil je dao oklop svom prijatelju Patroclusu, koji je poginuo u bitci, a oklop su preuzeli Trojanci. Ahilova majka, božica Thetis, zamolila je Hefesta da krivotvori novi oklop koji će joj osigurati sina.</p>
              </div>
              <div className='slika-predmeti'>
              <img src={Stit}></img>
              </div>
            </div>

            <div className='predmeti-item'>
              <div className='tekst-predmeti'>
              <h2> Ogrlica od Harmonije </h2>
              <p>Ogrlica harmonije bila je čarobni predmet u grčkoj mitologiji koji je donio lošu sreću svakome tko ga je posjedovao. Stvorio ga je bog kovača Hefest.</p>
              <p>Nakon afere njegove supruge s Aresom, rođena je Harmonia. Kasnije je postala supruga osnivača grada Tebe. Čim je Hefest saznao za ženidbu, otišao je i dao ogrlicu kao poklon.</p>
              </div>
              <div className='slika-predmeti'>
              <img src={Ogrlica}></img>
              </div>
            </div>
          </div>
          <hr className='hrcenter'></hr>
          <h2 className='mitovipredmetih2'>Mitovi</h2>
          <div className='mitovi'>
            <div className='mitovi-item'>
              <div className='tekst-mitovi'>
              <h2>Doba čovjeka</h2>
              <p>Prema grčkoj mitologiji, čovječanstvo je prošlo kroz brojna razdoblja koja su bila obilježena specifičnim događajima, a u staroj Grčkoj bila su poznata kao Doba čovjeka.  </p>
              <p> Zlatno doba. Tijekom zlatnog doba čovjeka, vladar bogova i ljudi bio je Titan Cronus. Čovječanstvo je skladno živjelo među bogovima i komuniciralo s njima. . Bilo je obilje hrane koju je priroda pružala, a ljudi nisu trebali raditi; Dakle, mogli su živjeti do vrlo starosti.</p>
              <p>Srebrno doba. Počevši od srebrnog doba do Hesiodovog vremena, smatralo se da je Zeus bog bogova i vladar svemira. Muškarci bi živjeli kao djeca stotinu godina, uz podršku majki, dok su kao odrasli živjeli vrlo kratko vrijeme jer su se redovito sukobljavali. </p>
              </div>
              <div className='slika-mitovi'>
              <img src={Slikaage}></img>
              <p>Tijekom brončanog doba, muškarci su bili čvrsti, obučeni i ratoborni. </p> 
              <p>Koristili su broncu za stvaranje oružja i stanova, a na kraju su se međusobno uništili u ratovima. Kraj ove ere obilježila je velika poplava Deucaliona.</p>
              </div>
            </div>

            <div className='mitovi-item'>
              <div className='tekst-mitovi'>
              <h2>Eros i psiha</h2>
              <p>Eros, "najpošteniji među bogovima bez smrti", također je bio jedan od najstrašnijih. A kako i ne bi bio? Čak je i jedna njegova strelica bila dovoljna da "uznemiri udove i prevlada um" bilo kojeg boga ili smrtnika. </p>
              <p>Međutim, ovo nije jedna od brojnih priča u kojima njegove strelice vode do nečije vječne sreće ili tuđe vječne propasti. Ovo je priča o tome kako se sam Eros jednom zaljubio u nekoga; I kako je taj netko bio spreman učiniti sve da ga ne izgubi</p>
              <p>Često čitana kao "alegorija truloškog putovanja duše kroz život prema mističnom jedinstvu s božanskim nakon smrti", Eros i Psiha jedna je od rijetkih bajki koje su došle do nas iz drevnog svijeta; I nesumnjivo je najljepša.Psiha je bila jedna od triju kćeri, sve su bile lijepe izvan vjerovanja. </p>
              </div>
              <div className='slika-mitovi'>
              <img src={Slikaeros}></img>
              <p>Ljudi su dolazili iz cijelog svijeta diviti se Psihi i bili su toliko očarani njezinim "djevojačkim veličanstvom" da su joj čak počeli odavati božanske počasti koje su obično rezervirane za Afroditu.</p>
              <p> Tada su njeni obredi zanemareni i čiji su hramovi oskvrnuti.</p>
              </div>
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

export default Mitovi;
