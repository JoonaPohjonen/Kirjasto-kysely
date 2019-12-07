import React, { Component } from 'react';
import './kysymys.css';

//Listataan kysymykset näkymään
class Kysymys extends Component {
    render() {
        return(
            <div className="kysymysTyyli">
                <p>
                    {this.props.quest.kysymys}
                </p>
            </div>
        )
    }
}

export default Kysymys;