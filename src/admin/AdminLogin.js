import React, { Component } from 'react';
import config, { authLogin } from './../firebase-config';
import {Redirect} from 'react-router-dom';

class AdminLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            isLogin: false,
            error: false
        }
        this.email = null
        this.password = null
    }

    loggIn = () => {
        this.setState({isLogin: true, error: false});
        authLogin.signInWithEmailAndPassword(this.email.value, this.password.value)
            .then(user => {
                console.log(user);
                this.setState({isAuthenticated: true})
            }).catch(e =>{
                console.log(e);
                this.setState({error: true, isAuthenticated: false, isLogin: false})
            });

    }

    render() {
        if(this.state.isAuthenticated){
            return <Redirect to='/admin' />
        }
        return (
            <div>
                <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Email</label>
                    <input type='email' className='form-control' id='email' ref={ref => this.email = ref} aria-describedby='emailHelp' placeholder='Enter email' />
                </div>
                <div className='form-group'>
                    <label htmlFor='exampleInputPassword1'>Password</label>
                    <input type='password' className='form-control' id='password' placeholder='Password' ref={ref => this.password = ref} />
                </div>
                {this.state.error && <h4 id="teste" className="form-text text-muted">E-mail e/ou senha inválido</h4>}
                <button disabled={this.state.isLogin} className='btn btn-primary' onClick={this.loggIn}>Logar</button>
            </div>
        )
    }
}
export default AdminLogin;