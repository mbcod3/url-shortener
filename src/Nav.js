import React from 'react'
import logo from './images/logo.svg'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    margin: '2rem 0'
  },
  self: {
    alignSelf: 'center'
  },
  navLinks: {
    textTransform: 'capitalize',
    fontSize: '15px',
    color: 'hsl(257, 7%, 63%)',
    fontWeight: '700',
    textDecoration: 'none',
    marginLeft: '2rem',
    '&:nth-child(1)': {
      marginLeft: '3rem',
    },
    '&:hover': {
      color: 'hsl(257, 27%, 26%)'
    }
  },
  loginLinks: {
    '&:nth-child(4)': {
      marginLeft: 'auto',
    },
    '&:nth-child(5)': {
      background: 'hsl(180, 66%, 49%)',
      borderRadius: '30px',
      padding: '10px 25px',
      color: 'white',
      '&:hover': {
        background: 'hsl(180,66%,69%)'
      }
    }
  },
  navDiv: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  burgerMenu: {
    display: 'none'
  },
  mobMenu: {
    display: 'none',
  },
  "@media (max-width: 768px)": {
    navDiv: {
      display: 'none',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '330px',
      maxWidth: '90vw',
      position: 'absolute',
      right: '5%',
      top: '10vh',
      background: 'rgb(58,48,83)',
      borderRadius: '10px',
      boxShadow: '0 3px 20px rgba(0,0,0,.1)',
      padding: '3rem 0',
      zIndex: '2',
      '& a': {
        margin: '0 0 2rem !important',
        fontSize: '18px',
        color: 'white',
        '&:hover, &:active, &:focus': {
          color: 'hsl(180, 66%, 49%)'
        },
        '&:nth-child(4)': {
          marginTop: '2rem !important',
          '&::before': {
            content: "''",
            position: 'absolute',
            height: '1px',
            width: '80%',
            background: 'hsla(235, 7%, 65%, 0.438)',
            left: '10%',
            bottom: '45%'
          }
        },
        '&:nth-child(5)': {
          marginBottom: '0 !important',
          width: '80%',
          boxSizing: 'border-box',
          textAlign: 'center'
        }
      },
    },
    mobMenu: {
      display: 'block',
      justifySelf: 'flex-end',
      marginLeft: 'auto'
    },

    navIcon: {
      position: 'relative',
      marginTop: '.25rem',
      width: '1.6rem',
      height: '2px',
      backgroundColor: 'darkgrey',
      display: 'block',
      '&::before, &::after': {
        content: "''",
        padding: '0',
        margin: '0',
        position: 'absolute',
        width: '1.6rem',
        height: '2px',
        backgroundColor: 'darkgrey',
        display: 'block',
        transition: 'all .2s',
      },
      '&::before': {
        top: '.5rem',
      },
      '&::after': {
        top: '1rem',
      }
    },

    burgerMenu: {
      '&:checked': {
        '& ~ $mobMenu > $navIcon': {
          background: 'transparent',
          '&::before': {
            transform: 'rotate(135deg)'
          },
          '&::after': {
            transform: 'rotate(-135deg)',
            top: '.5rem'
          },
        },
        '& ~ $navDiv': {
          display: 'flex'
        }
      }
    },
  }
})


export default function Nav() {

  const navLinks = ['features', 'pricing','resources']
  const loginLinks = ['login','sign up']

  const classes = useStyles();

  return (
    <nav className={clsx('container', classes.root)}>
      <img src={logo} alt="logo" className={classes.self}/>
      <input type="checkbox" id="burger-menu" className={classes.burgerMenu} />
      <label className={classes.mobMenu} htmlFor="burger-menu">
        <span className={classes.navIcon}></span>
      </label>
      <div className={classes.navDiv}>
        {navLinks.map((link,i) => <a href="#a" key={i} className={classes.navLinks}>{link}</a>)}
        {loginLinks.map((link, i) => <a href="#b" key={i} className={clsx(classes.loginLinks, classes.navLinks)}>{link}</a>)}
      </div>
    </nav>
  )
}
