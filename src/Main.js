import React from 'react'
import hero from './images/illustration-working.svg'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    paddingBottom: '100px'
  },
  hero: {
    // maxWidth: '50%',
    position: 'absolute',
    top: '130px',
    right: '-10%',
    '@media(max-width:1200px)': {
      width: '600px'
    },
    '@media(max-width:992px)': {
      width: '490px',
    },
    '@media(max-width:768px)': {
      width: '650px'
    },
    '@media(max-width:576px)': {
      position: 'relative',
      maxWidth: '130% !important',
      top: '0',
      right: '-10%'
    }
  },
  headings: {
    order: -1,
    maxWidth: '520px',
    marginTop: '100px',
    '@media(max-width:1200px)': {
      maxWidth: '450px',
      marginTop: '70px'
    },
    '@media(max-width:992px)': {
      marginTop: '60px',
      maxWidth: '350px'
    },
    '@media(max-width:768px)': {
      margin: '500px auto 0',
      textAlign: 'center',
    },
    '@media(max-width:576px)': {
      marginTop: '10px'
    }
  },
  headings__h2: {
    fontWeight: 700,
    fontFamily: 'inherit',
    fontSize: '70px',
    '@media(max-width:1200px)': {
      fontSize: '55px'
    },
    '@media(max-width:992px)': {
      fontSize: '45px'
    }
  },
  headings__tagline: {
    color: 'hsl(257, 7%, 63%)',
    fontWeight: 500,
    fontFamily: 'inherit',
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
      fontSize: '18px',
      fontWeight: 700,
      '&:hover': {
        background: 'hsl(180,66%,69%)'
      }
  }
})

export default function Main() {
  const classes = useStyles()
  return (
    <main className={clsx('container', classes.root)}>
      <img src={hero} alt="hero" className={classes.hero}/>
      <div className={classes.headings}>
      <Typography variant="h2" className={classes.headings__h2}>
        More than just shorter links
      </Typography>
      <Typography variant="h6" className={classes.headings__tagline}>Build your brand’s recognition and get detailed insights on how your links are performing.</Typography>
      <a href="#all: " className={classes.startBtn}>Get Started</a>
      </div>
    </main>
  )
}
