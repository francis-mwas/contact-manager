import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../../context'

class Contacts extends Component {
    render() {

        return (
        <Consumer>
            {value =>{
                const { contacts } = value;
                return(
                    <>
                        <h1 className="display-4"><span className="text-danger">Contacts</span> List</h1>
                        { contacts.map(contact =>(
                        <Contact key={contact.id} contacts={contact}/>
                        ))}
                    </>
                );
            }}
        </Consumer>

        )
    }
}

export default Contacts;
