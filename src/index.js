// ** React Imports
import { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// ** Redux Imports
import { store } from './redux/store'
import { Provider } from 'react-redux'

// ** Spinner (Splash Screen)
import Spinner from './components/spinner/Fallback-spinner'

// ** Core styles
import './index.css'

import reportWebVitals from './reportWebVitals'

// ** Lazy load app
const LazyApp = lazy(() => import('./App'))


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <LazyApp />
      </Suspense>
    </Provider>
  </BrowserRouter>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
