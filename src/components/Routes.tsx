import { Route, Switch } from 'react-router-dom'
import { Artist, Search } from '../pages'
import { Props } from '../types'

export default function Routes(props: Props) {

    return (
        <Switch>
            <Route {...props} path='/' component={Artist} exact />
            <Route {...props} path='/search' component={Search} />
        </Switch>
    )
}