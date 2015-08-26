import React from 'react'
import styleable from 'react-styleable'

import Cover from '../cover'
import Avatar from '../avatar'
import Bio from '../bio'
import Info from '../info'

@styleable(require('./index.css'))
export default class Layout extends React.Component {
  render () {
    return (
      <div className={this.props.css.container}>
        <Cover />
        <Avatar />
        <div className={this.props.css.main}>
          <Bio />
          <Info />
        </div>
      </div>
    )
  }
}
