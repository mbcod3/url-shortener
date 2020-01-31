import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import bg from './images/bg-shorten-desktop.svg'
import axios from 'axios';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const useStyles = makeStyles({
  root: {
    marginTop: '64px',
    position: 'relative',
    '&::after': {
      content: "''",
      position: 'absolute',
      top: '75px',
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgb(240,241,246)',
      zIndex: -1,
      margin: '0 -9999px',
      padding: '0 9999px'
    }
  },
  form: {
    display: 'flex',
    background: `hsl(257, 27%, 26%) url(${bg}) no-repeat center top`,
    backgroundSize: 'cover',
    padding: '50px 60px !important',
    borderRadius: '12px',
    boxSizing: 'border-box',
    '@media(max-width:768px)': {
      flexDirection: 'column'
    },
    '@media(max-width:576px)': {
      padding: '25px !important',
      margin: '0 15px !important'
    }
  },
  inputWrapper: {
    width: '100%',
    position: 'relative',
  },
  input: {
    background: 'white',
    width: '100%',
    outline: 'none',
    border: err => err ? '3px solid hsl(0, 87%, 67%)' : '3px solid transparent',
    borderRadius: err => err ? '10px' : '7px',
    fontSize: '18px',
    padding: '15px 30px',
    boxSizing: 'border-box',
    color: 'hsl(257, 7%, 63%)',
    fontFamily: 'inherit',
    '&::placeholder': {
      color: 'hsl(257, 7%, 63%)'
    },
    '@media(max-width:768px)': {
      height: '55px',

    },
  },
  btn: {
    background: 'hsl(180, 66%, 49%)',
    borderRadius: '9px',
    padding: '12px 35px !important',
    color: 'white',
    outline: 'none',
    border: 'none',
    fontFamily: 'inherit',
    fontWeight: 700,
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '24px',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    '&:hover': {
      background: 'hsl(180,66%,69%)'
    },
    '@media(max-width:768px)': {
      marginLeft: '0',
      justifyContent: 'center',
      height: '55px',
      boxSizing: 'border-box',
      marginTop: '20px'
    },
  },
  errMsg: {
    display: err => err ? 'block' : 'none',
    color: 'hsl(0, 87%, 67%)',
    fontSize: '1rem',
    fontStyle: 'italic',
    fontWeight: '500',
    position: 'absolute',
    top: '80%',
    left: '0',
  },
  userLink: {
    width: '100%',
    background: 'white',
    borderRadius: '7px',
    boxShadow: '0px 0px 1px 1px rgba(0,0,0,0.01)',
    display: 'flex',
    padding: '0 30px',
    boxSizing: 'border-box',
    marginBottom: '15px',
    '&:nth-child(2)': {
      marginTop: '24px'
    }
  },
  userBigUrl: {
    fontSize: '20px',
    color: 'hsl(260, 8%, 14%)',
  },
  userShortUrl: {
    fontSize: '20px',
    color: 'hsl(180, 66%, 49%)',
    marginLeft: 'auto',
    marginRight: '20px'
  },
  copyBtn: {
    outline: 'none',
    border: 'none',
    background: 'hsl(180, 66%, 49%)',
    color: 'white',
    padding: '12px 30px',
    fontWeight: 700,
    fontSize: '17px',
    alignSelf: 'center',
    borderRadius: '7px',
    cursor: 'pointer',
    '&:hover': {
      background: 'hsl(180,66%,69%)'
    }
  }
})
export default function Shortener() {
  const [err, setError] = React.useState(false);
  const [input, setInput] = React.useState('')
  const [shortenedLinks, setShortenedLinks] = React.useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem('shortUrls'))
    }
    catch (e) {
      val = []
    }
    return val
  })

  React.useEffect(() => {
    window.localStorage.setItem('shortUrls', JSON.stringify(shortenedLinks || [])) 
  }, [shortenedLinks]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!input) setError(true)
    else {
      setError(false)
      let userUrl = input
      if (input.search(/^http:\/\//i) === -1) userUrl = `http://${input}`
      setInput('')

      axios.post('https://rel.ink/api/links/',{
        "url": userUrl
      })
      .then(function (response) {
        const newLink = [input, `https://rel.ink/${response.data.hashid}`, false];
        let stateLinks;
        if (shortenedLinks) {
          stateLinks = [...shortenedLinks, newLink]
        } else stateLinks = [newLink]
        setShortenedLinks(stateLinks)
      })
      .catch(function (error) {
        alert('Please enter a valid link')
      })
    }
  }

  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleCopy(i) {
    let links = shortenedLinks.map((link,ind) => {
      if (i === ind) {
        return [
          link[0],link[1], true
        ]
      }
      else return link
    })
    setShortenedLinks(links)
    setTimeout(()=> {
      links = shortenedLinks.map((link,ind) => {
        if (i === ind) {
          return [
            link[0],link[1], false
          ]
        }
        else return link
      })
      setShortenedLinks(links)
    },2000)
  }

  const classes = useStyles(err)
  return (
    <div className={clsx(classes.root, "container")}>
      <form onSubmit={handleSubmit} className={classes.form} noValidate>
        <div className={classes.inputWrapper}>
          <input type="text" aria-label="Shorten a link here" placeholder="Shorten a link here..." className={classes.input} required value={input} onChange={handleChange} />
          <p className={classes.errMsg}>Please add a link</p>
        </div>
        <input type="submit" value="Shorten It!" className={classes.btn} />
      </form>
      {shortenedLinks && shortenedLinks.map((link, i) => (
        <div className={classes.userLink} key={i}>
          <p className={classes.userBigUrl}>{link[0]}</p>
          <p className={classes.userShortUrl}>{link[1]}</p>
          <CopyToClipboard text={link[1]}>
            <button className={classes.copyBtn} onClick={() => handleCopy(i)}>{link[2] ? 'Copied' : 'Copy'}</button>
          </CopyToClipboard>
        </div>
      ))}
    </div>
  )
}
