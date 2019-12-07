import React, { Component } from 'react';
import Header from './middleLayer/Header';
import KyselyAlku from './middleLayer/KyselyAlku';
import { Redirect, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import kysymys1 from './middleLayer/bottomLayer/jsonit/kysymys1.json';
import kysymys2 from './middleLayer/bottomLayer/jsonit/kysymys2.json';
import kysymys3 from './middleLayer/bottomLayer/jsonit/kysymys3.json';
import kysymys4 from './middleLayer/bottomLayer/jsonit/kysymys4.json';
import kysymys5 from './middleLayer/bottomLayer/jsonit/kysymys5.json';
import kysymys6 from './middleLayer/bottomLayer/jsonit/kysymys6.json';
import vastaukset1 from './middleLayer/bottomLayer/jsonit/vastaukset1.json';
import vastaukset2 from './middleLayer/bottomLayer/jsonit/vastaukset2.json';
import vastaukset3 from './middleLayer/bottomLayer/jsonit/vastaukset3.json';
import vastaukset4 from './middleLayer/bottomLayer/jsonit/vastaukset4.json';
import vastaukset5 from './middleLayer/bottomLayer/jsonit/vastaukset5.json';
import vastaukset6 from './middleLayer/bottomLayer/jsonit/vastaukset6.json';

class App extends Component {

  //State johon kysymykset ja vastaukset ladataan käyttöä varten
  state = {
    redirect: false,
    kysymys: [],
    vastaus: []
  }

  //Tämän avulla siirrytään aina seuraavaan kysymykseen ja vastauksiin
  seuraava = (id) => {
    this.setState({ vastaus: this.state.vastaus.map(todo => {
      if(todo.id === id) {
        todo.vastattu = !todo.vastattu
      }
      return todo;
    }) });
    this.setState({ vastaus: vastaukset2 })
    if(this.state.vastaus === vastaukset2) {
      this.setState({ vastaus: vastaukset3 })
    }
    if(this.state.vastaus === vastaukset3) {
      this.setState({ vastaus: vastaukset4 })
    }
    if(this.state.vastaus === vastaukset4) {
      this.setState({ vastaus: vastaukset5 })
    }
    if(this.state.vastaus === vastaukset5) {
      this.setState({ vastaus: vastaukset6 })
    }

    this.setState({ kysymys: kysymys2 })
    if(this.state.kysymys === kysymys2) {
      this.setState({ kysymys: kysymys3 })
    }
    if(this.state.kysymys === kysymys3) {
      this.setState({ kysymys: kysymys4 })
    }
    if(this.state.kysymys === kysymys4) {
      this.setState({ kysymys: kysymys5 })
    }
    if(this.state.kysymys === kysymys5) {
      this.setState({ kysymys: kysymys6 })
    }
  }

  //Ohjataan ensimmäiset vastaukset ja kysymykset odottamaan paikoilleen
  componentDidMount() {
    this.setState({ kysymys: kysymys1 });
    this.setState({ vastaus: vastaukset1 });
  }

  //Vaihdetaan nappia painamalla state falsesta trueksi jolloi tapahtuu uudelleenohjaus eri komponenttiin
  setRedirect = () => {
    this.setState({ redirect: !this.state.redirect })
    setTimeout(() => {
      this.getData();
    }, 500)
  }

  getData = () => {
    console.log(this.state.kysymys)
    console.log(this.state.vastaus)
  }

  //Alkuperäisnäkymä joka näyttää Header ja KyselyAlku komponentit
  render() {
    return(
      <Router>
        <div className="appi">
          <Route exact path="/" />
          <Header />
          <KyselyAlku staatti={this.state} vaihdos={this.setRedirect} seuraava={this.seuraava} />
        </div>
      </Router>
    )
  }
}

export default App;