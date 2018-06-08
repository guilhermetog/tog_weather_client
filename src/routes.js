import React from 'react'
import {Switch, Route} from 'react-router-dom'

import WeatherApp from './pages/WeatherApp'

const Roteamento = () => {
    return(
        <Switch>
            <Route path="/" component={WeatherApp} />
            <Route path="*" component={()=>(<div>Pagina 404</div>)}/>
        </Switch>
    )
}

export default Roteamento