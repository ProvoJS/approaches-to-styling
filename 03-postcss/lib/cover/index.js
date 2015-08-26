import React from 'react'
import styleable from 'react-styleable'

import img from './cover.jpg'

@styleable(require('./index.css'))
export default class Cover extends React.Component {
  render () {
    return (
      <div className={this.props.css.container}>
        <img className={this.props.css.img} src={img} alt="header" />
      </div>
    )
  }
}
