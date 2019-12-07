import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import './KyselyAlku.css';
import Kysymykset from './bottomLayer/kysymykset';

class KyselyAlku extends Component {
    render() {

        //Viimeisen kysymyksen päätteksi ladataan alkuperäisnäkymä jotta seuraava asiakas voi vastata kyselyyn
        function refreshPage() {
            setTimeout(() => {
                window.location.reload();
            }, 3000)
        }

        //Katsotaan onko nappia painettu ja päätetään ohjataanko seuraavaan vaiheeseen vai ei
        if(this.props.staatti.redirect === false) {
            return(
                <div>
                    <button onClick={this.props.vaihdos} className="nappi" >aloitus</button>
                </div>
            )
        } else {
            //Jos nappia on painettu katsotaan onko kysymyksiin jo vastattua ja jos ei niin odotetaan vastausta ja sen jälkeen siirrytään seuraavaan kysymykseen
            const doodoo = this.props.staatti.vastaus.filter(todo => todo.vastattu === false)
            console.log(doodoo)
            //Kun kaikkiin kysymyksiin on vastattu ladataan viimeinen kiitos näkymä ja päivitetään sivu seuraavaa vastaajaa varten
            if(doodoo.length !== 3) {
                refreshPage()
                return(
                    <div className="kiitosDivTyyli">
                        <p className="kiitosTyyli">
                        Kiitos vastauksesta!
                        </p>
                    </div>
                )
                //Jos kysymyksiin ei ole vastattu ladataan ne jonossa niin kauan että jokaiseen vastataan
            } else {
                return (
                    <div>
                        <Kysymykset todos={this.props.staatti.vastaus} kysymys={this.props.staatti.kysymys} seuraava={this.props.seuraava} />
                    </div>
                )
            }
        }
    }
}

export default KyselyAlku;