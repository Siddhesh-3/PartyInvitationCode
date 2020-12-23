import React,{useContext} from 'react'
import jwt from 'jsonwebtoken'
import AuthContext from '../../../context/authContext/authContext'
import {Route,Redirect} from 'react-router-dom'

 const PrivateRoute = ({component:Component, ...rest}) => {
    //  const {userAuth} = useContext(AuthContext)

     const lStorage = localStorage.getItem('token')
     try {
        var verified = jwt.verify(lStorage,'mysecret')
    } catch (error) {
        console.log('token not found')
    }
    return (
       <Route 
       {...rest}
       render={props => !verified ? (<Redirect to='/login' />):(<Component {...props} />)}
       />
    )
}

export default PrivateRoute