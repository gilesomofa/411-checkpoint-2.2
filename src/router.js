import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Listings from './containers/Listings'
import AddListing from './containers/AddListing'
import Login from './components/Login'
import cookie from 'cookie'
import Navbar from './components/Navbar'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
        return cookies['loggedIn'] ? true : false
}

const ProtectedRoute = ({component: component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth() === true
            ? <component {...props} />
            : <Redirect to= {{pathname: '/login', state: {from: props.location}}} />}
                />          
    )
}

const Router = () =>{
    return (
        <>
        <Navbar /> 
        <Switch>
        <Route exact path = "/" component = {Listings} />
        <Route path = "/AddListing" component = {AddListing} />
        <Route path = "/login" component = {Login} />
        </Switch>
        </>
    )
}

export default Router;


