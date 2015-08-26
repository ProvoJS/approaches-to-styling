import React from 'react'
import styleable from 'react-styleable'

@styleable(require('./index.css'))
export default class TechStack extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    img: React.PropTypes.string.isRequired,
    comment: React.PropTypes.string
  }
  renderComment() {
    return this.props.comment ? (<p className={this.props.css.comment + ' ' + this.props.css.titleLine}> - {this.props.comment}</p>) : ''
  }
  render () {
    return (
      <li className={this.props.css.container}>
        <h3 className={this.props.css.titleLine}><a href={this.props.url}><img className={this.props.css.img} src={this.props.img} /> {this.props.title}</a></h3>
        {this.renderComment()}
        {this.props.children}
      </li>
    )
  }
}
