import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../views/Home'
import Guitar from '../views/Guitar'
import Drum from '../views/Drum'

const Routing = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/guitar' component={Guitar} />
            <Route path='/drum' component={Drum} />
        </Switch>
    );
}

export default Routing;