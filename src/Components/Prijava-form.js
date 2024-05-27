import React, {Component } from 'react';
export class Prijavaform extends Component{ 
    state={
        ime:'Ime',
        prezime:'Prezime',
        lozinka:'Lozinka',
    }
    onSubmit=e=>{e.preventDefault(); console.log("Prijava je potvrđena", this.state.ime)}
    render()
    {
        return(
            
        <div>
        <form>
            <input placeholder='Vaše Ime' value={this.state.ime} onChange={e=>this.setState({ime: e.target.value})}></input>
            <input placeholder='Vaše Prezime' value={this.state.prezime} onChange={e=>this.setState({prezime: e.target.value})}></input>
            <input placeholder='Vaša lozinka' value={this.state.lozinka} onChange={e=>this.setState({lozinka: e.target.value})}></input>
            <button onClick={e=>this.onSubmit(e)}>Potvrdi</button>
            <h1 className='mitovipredmetih2'>Dobrodošli na stranicu, {this.state.ime}</h1>
        </form>
        </div>);
    }
}
export default Prijavaform;