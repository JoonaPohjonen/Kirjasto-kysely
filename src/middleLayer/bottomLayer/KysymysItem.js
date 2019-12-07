import React, { Component } from 'react';

class KysymysItem extends Component {

    //Jos kysymykseen on vastattu se piilotetaan ja jos ei niin sille annetaan tyyli jolla se näytetään
    getStyle = () => {
        if(this.props.todo.vastattu) {
            return {
                
            }
        } else {
            return {
                background: '#ff8c1a',
                textAlign: 'center',
                padding: '2%',
                borderColor: 'white',
                borderStyle: 'solid',
                width: '95%',
                fontFamily: 'sans-serif',
                fontSize: '200%'
            }
        }
    }

    render() {
        const { id, vastaus, vastattu } = this.props.todo;

        //Listataan vastausvaihtoehdot yksitellen näkymään allekkain
        return(
            <div>
                <p>
                    <button style={this.getStyle()} onClick={this.props.seuraava.bind(this, id)} >
                    {vastaus}
                    </button>
                </p>
            </div>
        )
    }
}

export default KysymysItem;