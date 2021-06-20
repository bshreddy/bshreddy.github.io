import { createMuiTheme } from '@material-ui/core/styles'
import './declarations.d';
import baseStyle from './styles/base.scss'

console.log(baseStyle.primary)

export const theme = createMuiTheme({
  palette: {
    primary: { 
      light: '#434345',
      main: '#1C1C1E',
      dark: '#000000',
      contrastText: '#FFFFFF'
    },
    secondary: { 
      light: '#69A8FF',
      main: '#007AFF',
      dark: '#004FCB',
      contrastText: '#FFFFFF'
    },
    error: { 
      main: '#FF3B30' 
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "'Helvetica Neue'",
      "Roboto",
      "'Segoe UI'",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "'Open Sans'",
      "sans-serif"
    ].join(','),
  },
})
