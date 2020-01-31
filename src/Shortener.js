import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import bg from './images/bg-shorten-desktop.svg'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginTop: '48px',
    background: `hsl(257, 27%, 26%) url(${bg}) no-repeat center top`,
    backgroundSize: 'cover',
    padding: '50px !important',
    borderRadius: '12px',
    boxSizing: 'border-box',
    position: 'relative',
    '&::after': {
      content: "''",
      position: 'absolute',
      top: '50%',
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgb(240,241,246)',
      zIndex: -1,
      margin: '0 -9999px',
      padding: '0 9999px'
    },
    '@media(max-width:768px)': {
      flexDirection: 'column'
    },
    '@media(max-width:576px)': {
      padding: '25px !important',
      margin: '0 15px !important'
    }
  },
  input: {
    background: 'white',
    width: '100%',
    outline: 'none',
    border: 'none',
    borderRadius: '7px',
    fontSize: '18px',
    padding: '17px 30px',
    boxSizing: 'border-box',
    color: 'hsl(257, 7%, 63%)',
    fontFamily: 'inherit',
    '&::placeholder': {
      color: 'hsl(257, 7%, 63%)'
    },
    '@media(max-width:768px)': {
      height: '55px',

    }
  },
  btn: {
    background: 'hsl(180, 66%, 49%)',
    borderRadius: '7px',
    padding: '12px 35px !important',
    color: 'white',
    textDecoration: 'none',
    fontFamily: 'inherit',
    fontWeight: 700,
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '24px',
    whiteSpace: 'nowrap',
    '&:hover': {
      background: 'hsl(180,66%,69%)'
    },
    '@media(max-width:768px)': {
      marginLeft: '0',
      justifyContent: 'center',
      height: '55px',
      boxSizing: 'border-box',
      marginTop: '20px'
    }
  }
})
export default function Shortener() {
  const classes = useStyles()
  return (
    <div className={clsx(classes.root, "container")}>
      <input type="text" id="outlined-basic" aria-label="Shorten a link here..." placeholder="Shorten a link here..." className={classes.input} />
      <a className={classes.btn} href="#a">
        Shorten It!
      </a>
    </div>
  )
}
