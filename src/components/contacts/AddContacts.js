import React, { Component } from 'react'
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';




class AddContacts extends Component {

    state = {
       name: '',
       email: '',
       phone: '', 
       errors: {}
    }



    handleSubmit = async (dispatch, e) =>{
        e.preventDefault();
        const { name, email, phone } = this.state;

        // Check for errors
        if(name ===''){
            this.setState({
                errors: { name: 'Name is required'}
            });
            return;
        }

        if(email ===''){
            this.setState({
                errors: { email: 'Email is required'}
            });
            return;
        }

        if(phone ===''){
            this.setState({
                errors: { phone: 'Email is required'}
            });
            return;
        }


        const newContact = {
            name,
            email,
            phone
        }
        
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
        dispatch({
            type: 'ADD_CONTACT',
            payload: response.data
        })
        
        //clear state
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        this.props.history.push('/');
    
    }

    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render() {

        const { name, email, phone, errors } = this.state

        return (
            <Consumer>
                {value =>{
                    const { dispatch } = value;
                    return (
                <div className="card my-3 mb-3">
                    <div className="card-header">Add Contacts</div>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit.bind(this,dispatch) }>
                                <TextInputGroup 
                                    label = "Name"
                                    name = "name"
                                    placeholder = "Enter Your Name"
                                    value = { name }
                                    onChange = { this.onChange }
                                    error={ errors.name}
                                />
                                <TextInputGroup 
                                    label = "Email"
                                    name = "email"
                                    type="email"
                                    placeholder = "Enter Your Email"
                                    value = { email }
                                    onChange = { this.onChange }
                                    error={ errors.email}
                                />

                                <TextInputGroup 
                                    label = "Phone"
                                    name = "phone"
                                    placeholder = "Enter Your phone number"
                                    value = { phone }
                                    onChange = { this.onChange }
                                    error={ errors.phone}
                                />
                                
                                <input type="submit" value="Add Contact" className="btn btn-primary btn-block"/>
                            </form>
                        </div>
            </div>
            )
                }}
            </Consumer>
        )
    }
}

export default AddContacts;
