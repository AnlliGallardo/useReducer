import React from "react";
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRouters = ({
    isAuthenticated,
    componente: Component,
    ...rest
}) =>{
    return(
        <Route {...rest}
            component={(props) =>(
                (isAuthenticated)
                ?(<Component {...props} />)
                :(<Redirect to="/auth/login" />)
            )}
        
        />
    )
}

PrivateRouters.propTypes ={
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}