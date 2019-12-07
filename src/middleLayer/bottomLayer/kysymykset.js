import React, { Component } from 'react';
import KysymysItem from './KysymysItem';
import Kysymys from './Kysymys';

class Kysymykset extends Component {
    render() {
        //Tässä komponentissa listataan kysymykset ja vastaukset omiin ryhmiinsä ja omiin objeteihinsa
        const vastaan = this.props.todos.map((todo) => <KysymysItem key={todo.id} todo={todo} seuraava={this.props.seuraava} />)
        const kysyn = this.props.kysymys.map((quest) => <Kysymys key={quest.id} quest={quest} />)
        return (
            <div>
            {kysyn}
            {vastaan}
            </div>
        )
    }
}

export default Kysymykset;