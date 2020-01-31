import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Nav from './Nav'
import Main from './Main';
import Shortener from './Shortener';
import Promo from './Promo';
import Cta from './Cta';
import Footer from './Footer';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  typography: {
    fontFamily: 'Poppins',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': ['Poppins'],
      },
    },
  },
});
theme = responsiveFontSizes(theme)


const useStyles = makeStyles({
  '@global': {
    html: {
      overflowX: 'hidden',
    },
    body: {
      fontFamily: 'Poppins, sans serif',
      overflowX: 'hidden',
      position: 'relative'
    },
    'img': {
      maxWidth: '100%',
      height: 'auto'
    },
    '.container': {
      maxWidth: '100%',
      paddingRight: '15px',
      paddingLeft: '15px',
      marginRight: 'auto',
      marginLeft: 'auto',
      '@media(min-width: 576px)': {
        maxWidth: '540px',
      },
      '@media (min-width: 768px)': {
        maxWidth: '720px',
      },
      '@media (min-width: 992px)': {
        maxWidth: '960px',
      },
      '@media (min-width: 1200px)': {
        maxWidth: '1140px',
      }
    }
    
  },
  root: {

  }
})

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Nav />
        <Main />
        <Shortener />
        <Promo />
        <Cta />
        <Footer />
    </ThemeProvider>
      </div>
  );
}

export default App;
