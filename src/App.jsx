import { Provider } from 'react-redux'
import './App.css'
import Dashboard from './Pages/Dashboard'
import appStore from './utils/store/appStore'

function App() {

  return (
    <Provider store={appStore}>
     <Dashboard />
     {/* home */}
    </Provider>
  )
}

export default App
