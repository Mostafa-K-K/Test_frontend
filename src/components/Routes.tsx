import { Route, Switch } from 'react-router-dom'
import { Artists, History } from '../pages'
import { Props } from '../types'

export default function Routes(props: Props) {

    return (
        <Switch>
            <Route {...props} path='/' component={Artists} exact />
            <Route {...props} path='/history' component={History} />
        </Switch>
    )
}