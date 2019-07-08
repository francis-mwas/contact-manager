import React, { Component } from 'react'
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {

    state = {
        showInfo: false
    }

    handleClick = (e) =>{
        this.setState({
            showInfo: !this.state.showInfo
        });            
    }

   handleDelete = async (id, dispatch)=>{
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        dispatch({
                type: 'DELETE_CONTACT',
                payload: id,
            })
    }

    render(){

    const { name, email, phone, id } = this.props.contacts;
    const { showInfo } = this.state;


    return (

        <Consumer>
            {value =>{

                const { dispatch } = value
                return(

                    <div className="card card-body mb-3 my-3">
                        <h4>Name: { name } <i onClick={this.handleClick } className="fas fa-sort-down" style={{ cursor: 'pointer'}}></i>
                        <i className="fas fa-times" onClick={() => this.handleDelete(id,dispatch)} style={{cursor: 'pointer', color: 'red', float: 'right'}}></i>
                        <Link to={`contacts/edit/${id}`}>
                            <i className="fas fa-pencil-alt" style={{cursor: 'pointer', color: 'black', float: 'right', marginRight:'1rem'}}></i>
                        </Link>
                        </h4>
                        {
                            showInfo && <ul className="list-group">
                            <li className="list-group-item">Email: { email }</li>
                            <li className="list-group-item">Phone: { phone }</li>
                        </ul>
                        }
                    </div>
                );
            }}
        </Consumer>
    )
}
}

export default Contact;
 