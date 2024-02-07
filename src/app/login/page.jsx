import React from 'react';
import classes from './Login.module.css'

function LoginPage() {
  return (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <div className={classes.button}>Sign in with Google</div>
            <div className={classes.button}>Sign in with Github</div>
            <div className={classes.button}>Sign in with Facebook</div>
        </div>
    </div>
  )
}

export default LoginPage