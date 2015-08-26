import React from 'react'
import styleable from 'react-styleable'

import img from './avatar.jpg'

@styleable(require('./index.css'))
export default class Avatar extends React.Component {
  render () {
    return (
      <div className={this.props.css.container}>
        <img className={this.props.css.img} src={img} alt="avatar" />
      </div>
    )
  }
}
