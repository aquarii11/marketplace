import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import { hot } from 'react-hot-loader'

const App = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
     setHasMounted(true);
    
  }, [])
   if (!hasMounted) {
    return null;
  }
  return (
  <BrowserRouter >
      <ThemeProvider theme={theme}>
        <MainRouter/>
      </ThemeProvider>
  </BrowserRouter>
)}

export default hot(module)(App)
