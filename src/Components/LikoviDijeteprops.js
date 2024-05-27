import Afrodita from '../afrodita.jpg';
import Apollo from '../apollo.jpg';
import Ares from '../ares.jpg';
import Artemis from '../artemis.jpg';
import Atena from '../atena.jpg';
import Had from '../had.jpg';
import Zeus from '../zeus.jpg';
import Posjedon from '../posejdon.jpg';
import Hermes from '../hermes.jpg';
import Hepstaus from '../hepastaus.jpg';

import Atlas from '../atlas.jpg';
import Kronos from '../kronus.jpg';
import Eos from '../eos.jpg';
import Prometej from '../prometej.jpg';

import Kerberus from '../cerberus.jpg';
import Kiklop from '../kiklop.jpg';
import Grifin from '../grifin.jpg';
import Unicorn from '../unicorn.jpg';

import Midas from '../midas.jpg';
import Pandora from '../pandora.jpg';
import Icarus from '../icarus.jpg';
import Theseus from '../theseus.jpg';
export default function LikoviDijete({props}){
    return (
       <div>
        <h1 className="naslov-tab">Olimpijanci</h1>
        <table className='tablicalikovi'>
        <tr>
            <td><img src={Afrodita}></img></td>
            <td className='imetd'>{props.ime}</td> 
            <td>{props.vrsta}</td>
            <td>{props.opcenito}</td>
        </tr>
        <tr>
            <td><img src={Apollo}></img></td>
            <td className='imetd'>{props.ime2}</td> 
            <td>{props.vrsta2}</td>
            <td>{props.opcenito2}</td>
        </tr>
        <tr>
            <td><img src={Ares}></img></td>
            <td className='imetd'>{props.ime3}</td> 
            <td>{props.vrsta3}</td>
            <td>{props.opcenito3}</td>
        </tr>
        <tr>
            <td><img src={Artemis}></img></td>
            <td className='imetd'>{props.ime4}</td> 
            <td>{props.vrsta4}</td>
            <td>{props.opcenito4}</td>
        </tr>
        <tr>
            <td><img src={Atena}></img></td>
            <td className='imetd'>{props.ime5}</td> 
            <td>{props.vrsta5}</td>
            <td>{props.opcenito5}</td>
        </tr>
        </table>
        <table className='tablicalikovi'>
        <tr>
            <td><img src={Had}></img></td>
            <td className='imetd'>{props.ime6}</td> 
            <td>{props.vrsta6}</td>
            <td>{props.opcenito6}</td>
        </tr>
        <tr>
            <td><img src={Zeus}></img></td>
            <td className='imetd'>{props.ime7}</td> 
            <td>{props.vrsta7}</td>
            <td>{props.opcenito7}</td>
        </tr>
        <tr>
            <td><img src={Posjedon}></img></td>
            <td className='imetd'>{props.ime8}</td> 
            <td>{props.vrsta8}</td>
            <td>{props.opcenito8}</td>
        </tr>
        <tr>
            <td><img src={Hermes}></img></td>
            <td className='imetd'>{props.ime9}</td> 
            <td>{props.vrsta9}</td>
            <td>{props.opcenito9}</td>
        </tr>
        <tr>
            <td><img src={Hepstaus}></img></td>
            <td className='imetd'>{props.ime10}</td> 
            <td>{props.vrsta10}</td>
            <td>{props.opcenito10}</td>
        </tr>
        </table>
        <hr className='hr-tablica'></hr>
        <h1 className="naslov-tab">Titani</h1>
        <table className='tablicalikovi'>
        <tr>
            <td><img src={Atlas}></img></td>
            <td className='imetd'>{props.ime11}</td> 
            <td>{props.vrsta11}</td>
            <td>{props.opcenito11}</td>
        </tr>
        <tr>
            <td><img src={Kronos}></img></td>
            <td className='imetd'>{props.ime12}</td> 
            <td>{props.vrsta12}</td>
            <td>{props.opcenito12}</td>
        </tr>
        <tr>
            <td><img src={Eos}></img></td>
            <td className='imetd'>{props.ime13}</td> 
            <td>{props.vrsta13}</td>
            <td>{props.opcenito13}</td>
        </tr>
        <tr>
            <td><img src={Prometej}></img></td>
            <td className='imetd'>{props.ime14}</td> 
            <td>{props.vrsta14}</td>
            <td>{props.opcenito14}</td>
        </tr>
        </table>
        <hr className='hr-tablica'></hr>
        <h1 className="naslov-tab">Mitska stvorenja</h1>
        <table className='tablicalikovi'>
        <tr>
            <td><img src={Kerberus}></img></td>
            <td className='imetd'>{props.ime15}</td> 
            <td>{props.vrsta15}</td>
            <td>{props.opcenito15}</td>
        </tr>
        <tr>
            <td><img src={Kiklop}></img></td>
            <td className='imetd'>{props.ime16}</td> 
            <td>{props.vrsta16}</td>
            <td>{props.opcenito16}</td>
        </tr>
        <tr>
            <td><img src={Grifin}></img></td>
            <td className='imetd'>{props.ime17}</td> 
            <td>{props.vrsta17}</td>
            <td>{props.opcenito17}</td>
        </tr>
        <tr>
            <td><img src={Unicorn}></img></td>
            <td className='imetd'>{props.ime18}</td> 
            <td>{props.vrsta18}</td>
            <td>{props.opcenito18}</td>
        </tr>
        
        </table>
        <hr className='hr-tablica'></hr>
        <h1 className="naslov-tab">Smrtnici</h1>
        <table className='tablicalikovi'>
        <tr>
            <td><img src={Midas}></img></td>
            <td className='imetd'>{props.ime19}</td> 
            <td>{props.vrsta19}</td>
            <td>{props.opcenito19}</td>
        </tr>
        <tr>
            <td><img src={Pandora}></img></td>
            <td className='imetd'>{props.ime20}</td> 
            <td>{props.vrsta20}</td>
            <td>{props.opcenito20}</td>
        </tr>
        <tr>
            <td><img src={Icarus}></img></td>
            <td className='imetd'>{props.ime21}</td> 
            <td>{props.vrsta21}</td>
            <td>{props.opcenito21}</td>
        </tr>
        <tr>
            <td><img src={Theseus}></img></td>
            <td className='imetd'>{props.ime22}</td> 
            <td>{props.vrsta22}</td>
            <td>{props.opcenito22}</td>
        </tr>
        </table>
        <br></br>
         </div>
    );
}