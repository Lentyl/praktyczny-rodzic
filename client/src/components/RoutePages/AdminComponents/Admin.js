import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import AdminNav from '../../Component-parts/AdminNav'





class Admin extends React.Component {

    handleLogout = () => {
        Cookies.remove('user', { path: '/admin' });
        this.props.handlelLoggedStatus(false);
    }

    render() {
        let loggedInState = this.props.loggedInState;
        const cooki = Cookies.get('user');

        if (loggedInState === true || cooki === 'loginTrue') {
            return (
                <div className='admin-page'>
                    <AdminNav handleLoggedStatus={this.props.handleLoggedStatus} />
                </div>
            );
        } else {
            return (
                <Route render={() => (
                        <Redirect to='/login' />
                )} />
            );
        }
    }
}
export default Admin;