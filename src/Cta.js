import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import bg from './images/bg-boost-desktop.svg'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
  background: `hsl(257, 27%, 26%) url(${bg}) no-repeat center top`,
  backgroundSize: 'cover',
  padding: '50px 20px !important',
  textAlign: 'center'
  },
  heading: {
    color: 'white',
    fontFamily: 'inherit',
    fontWeight: 700,
    marginTop: '1rem'
  },
  startBtn: {
    background: 'hsl(180, 66%, 49%)',
      borderRadius: '30px',
      padding: '15px 40px',
      color: 'white',
      display: 'inline-block',
      marginTop: '25px',
      textDecoration: 'none',
      fontWeight: 700,
      fontSize: '18px',
      '&:hover': {
        background: 'hsl(180,66%,69%)'
      }
  }
})

export default function Cta() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.heading}>Boost your links today</Typography>
      <a href="#all" className={classes.startBtn}>Get Started</a>
    </div>
  )
}
