import React from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'


const list = [{ name: 'Wiadomości', path: '/admin/messages', exact: true },
{ name: 'Dodaj artykuł', path: '/admin/add-article', exact: true },
{ name: 'Zatwierdź komentarz', path: '/admin/confirm-comments', exact: true }
]



const adminNav = ({ handleLoggedStatus, loggedInState }) => {



    const adminNav = list.map(item => (

        <NavLink className="admin-nav__navigation-link" key={item.name} to={item.path} exact={item.exact}>

            <li className='admin-nav__navigation-link-element'>{item.name}</li>

        </NavLink >

    ))

    const handleLogout = () => {


        Cookies.remove('user', { path: '/admin' });

        handleLoggedStatus(false);

    }

    const cooki = Cookies.get('user');

    if (loggedInState === true || cooki === 'loginTrue' || loggedInState === undefined) {

        return (

            <div className='admin-nav'>
                <button className='admin-nav__logout' onClick={handleLogout}>logout</button>
                <nav className='admin-nav__container'>
                    {adminNav}
                </nav>
            </div>

        );
    } else {

        return (

            <Route render={() => (
                (
                    <Redirect to='/login' />
                )
            )} />
        )
    }

}

export default adminNav;