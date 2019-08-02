import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import AdminMenu from './AdminMenu';
import AdminPortfolio from './AdminPortfolio';
import AdminLogin from './AdminLogin';

class Admin extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='ph-20'> 
                <h2>Painel Administrativo</h2>
                <Route path={'/'} component={AdminMenu} />
                <Route path={`${this.props.match.url}/portfolio`} component={AdminPortfolio} />
                <Route path={`${this.props.match.url}/login`} component={AdminLogin} />
            </div>
        )
    }
}

export default Admin;