import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';
import brand from './images/icon-brand-recognition.svg'
import records from './images/icon-detailed-records.svg'
import custom from './images/icon-fully-customizable.svg'

const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    position: 'relative',
    padding: '32px 0',
    '&::after': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgb(240,241,246)',
      zIndex: -2,
      margin: '0 -9999px',
      padding: '0 9999px'
    }
  },
  headingsContainer: {
    margin: '86px auto',
    maxWidth: '500px',
    textAlign: 'center',
  },
  heading: {
    fontFamily: 'inherit',
    fontWeight: 700,
    marginBottom: '1rem'
  },
  tagline: {
    color: 'hsl(257, 7%, 63%)',
    fontFamily: 'inherit',
    fontSize: '18px'
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
    marginBottom: '86px',
    '&::after': {
      content: "''",
      position: 'absolute',
      width: '50%',
      height: '10px',
      background: 'hsl(180, 66%, 49%)',
      top: '44%',
      left: '25%',
      zIndex: '-1'
    },
    '@media(max-width:992px)': {
      flexDirection: 'column',
      alignItems: 'center',
      '&::after': {
        width: '10px',
        height: '50%',
        top: '25%',
        left: '49%'
      }
    }
  },
  card: {
    background: 'white',
    maxWidth: '350px',
    padding: '80px 30px 40px',
    borderRadius: '6px',
    boxShadow: '0px 0px 5px 0px rgba(215,216,230,.51)',
    boxSizing: 'border-box',
    position: 'relative',
    '&::before': {
      content: "''",
      position: 'absolute',
      top: '-17%',
      left: '10%',
      width: '88px',
      height: '88px',
      borderRadius: '50%'
    },
    '&:nth-child(1)': {
      '&::before': {
        background: `rgb(58,48,83) url(${brand}) no-repeat center`
      }
    },
    '&:nth-child(2)': {
      marginTop: '44px',
      '&::before': {
        background: `rgb(58,48,83) url(${records}) no-repeat center`
      }
    },
    '&:nth-child(3)': {
      marginTop: '88px',
      '&::before': {
        background: `rgb(58,48,83) url(${custom}) no-repeat center`
      }
    },
    '@media(max-width:1200px)': {
      maxWidth: '295px',
      padding: '75px 20px 30px'
    },
    '@media(max-width:992px)': {
      textAlign: 'center',
      '&::before': {
        left: '50%',
        transform: 'translateX(-50%)'
      },
      '&:nth-child(2)': {
        marginTop: '88px',
      }
    }
  },
  cardHeading: {
    fontWeight: 700,
    fontFamily: 'inherit',
    marginBottom: '1rem'
  },
  cardBody: {
    fontFamily: 'inherit',
    color: 'hsl(257, 7%, 63%)',
    fontSize: '15px'
  }
})

export default function Promo() {
  const classes = useStyles()

  const cards = [
    ['Brand Recognition', 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'],
    ['Detailed Records', 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'],
    ['Fully Customizable', 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.']
  ]

  return (
    <div className={clsx(classes.root, "container")}>
      <div className={classes.headingsContainer}>
        <Typography variant="h4" className={classes.heading}>
          Advanced Statistics
        </Typography>
        <Typography variant="body1" className={classes.tagline}>
          Track how your links are performing across the web with our advanced statistics dashboard.
        </Typography>
      </div>
      <div className={classes.cardsContainer}>
        {cards.map((card, ind) => (
          <div className={classes.card} key={ind}>
            <Typography variant="h5" className={classes.cardHeading}>{card[0]}</Typography>
            <Typography variant="h6" className={classes.cardBody}>{card[1]}</Typography>
          </div>
        ))}
      </div>
    </div>
  )
}
