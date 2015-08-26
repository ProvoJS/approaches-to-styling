import React from 'react'
import styleable from 'react-styleable'

@styleable(require('./index.css'))
export default class Bio extends React.Component {
  render () {
    return (
      <div className={this.props.css.container}>
        <h2>Bressain Dinkelman</h2>
        <p className={this.props.css.bio}>.Net, JavaScript, software craftsman at <a href="http://www.pluralsight.com">Pluralsight</a>. I like music, video games and programming. I've been accused of acting my age on occasion.</p>
      </div>
    )
  }
}
