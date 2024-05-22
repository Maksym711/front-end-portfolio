import React from 'react'
import './Button.css'

export default function (props) {

    const classes = []

    if(props.big){
        classes.push('big')
    } if(props.small){
        classes.push('small')
    }

  return (
    <div 
      className={classes.join(' ')} 
      onClick={props.onClick}
    >
        {props.children}
    </div>
  )
}
