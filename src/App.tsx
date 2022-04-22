import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes'
import { Props } from './types'

export default function App(props: Props) {
  return (
    <Router>
      <Routes {...props} />
    </Router>
  )
}
