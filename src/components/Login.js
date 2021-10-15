import React from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            usename: '',
            password: ''
        },
        errorMessage: '',
    }
    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }
    login = event => {
        event.preventDefault()
        axiosWithAuth()
        .post('/login', this.state.credentials)
            .then(response => {
                console.log(response);
                localStorage.setItem('token', response.data.token)
                this.props.history.push('/view')
            })
            .catch(error => {
                console.log(error.response.data)
                this.setState({
                    errorMessage: error.response.data
                })
            })
    }
    render() {
        return(
            <ComponentContainer>
                <ModalContainer>
                    <h1>Welcome to Blogger Pro</h1>
                    <h2>Please enter your account information.</h2>
                    <Label>
                        <FormGroup onSubmit = {this.login}>
                            <Input 
                                type = 'text'
                                id = 'username'
                                name = 'usename'
                                value = {this.state.credentials.username}
                                onchange = {this.handleChange}
                            />
                            <Input 
                                type = 'text'
                                id = 'password'
                                name = 'password'
                                value = {this.state.credentials.password}
                                onchange = {this.handleChange}
                            />
                            <Button id = 'submit'>Log In</Button>
                        </FormGroup>
                        <p id = 'error'>{this.errorMessage}</p>
                    </Label>
                </ModalContainer>
            </ComponentContainer>);
    }
}

export default Login;

//Task List
//1. Build login form DOM from scratch, making use of styled components if needed. Make sure the username input has id="username" and the password input as id="password".
//2. Add in a p tag with the id="error" under the login form for use in error display.
//3. Add in necessary local state to support login form and error display.
//4. When login form is submitted, make an http call to the login route. Save the auth token on a successful response and redirect to view page.
//5. If the response is not successful, display an error statement. **a server provided error message can be found in ```err.response.data```**
//6. MAKE SURE TO ADD id="username", id="password", id="error" AND id="submit" TO THE APPROPRIATE DOM ELEMENTS. YOUR AUTOTESTS WILL FAIL WITHOUT THEM.

const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
`
