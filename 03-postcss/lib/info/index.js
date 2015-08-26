import React from 'react'
import styleable from 'react-styleable'

import StackItem from './components/stack-item'

@styleable(require('./index.css'))
export default class Layout extends React.Component {
  getStackItemCss() {
    return {
      container: this.props.css.stackItem,
      img: this.props.css.img
    }
  }
  renderSubItem(title, img, url) {
    return (
      <li className={this.props.css.stackItem}><a href={url}><img className={this.props.css.img} src={img} /> {title}</a></li>
    )
  }
  render () {
    return (
      <div className={this.props.css.container}>
        <h2 className={this.props.css.title}>Background & Experience</h2>
        <ul className={this.props.css.newList}>
          <li className={this.props.css.stackItem}>BS in Computer Science (some emphasis on graphic art).</li>
          <li className={this.props.css.stackItem}>Caselle (5 years) - Desktop accounting software using .Net & SQL Server.</li>
          <li className={this.props.css.stackItem}>Henry Schein (2 years) - Dental claims processing desktop & website software using .Net, Grails, Backbone, & SQL Server.</li>
          <li className={this.props.css.stackItem}>Ancestry.com (2 years) - Geneological backend and full stack website using .Net, Angular, SQL Server, & MySQL.</li>
          <li className={this.props.css.stackItem}>Pluralsight.com (1 year) - Tech & creative learning full stack website using .Net, Angular, React, & Cassandra.</li>
        </ul>
        <h2 className={this.props.css.title}>Technology Stack</h2>
        <ul className={this.props.css.newList}>
          <StackItem title='Webpack'
                     url='http://webpack.github.io/'
                     img={require('./img/webpack_s.png')}
                     css={this.getStackItemCss()} />
          <StackItem title='Babel'
                     url='https://babeljs.io/'
                     img={require('./img/babel.svg')}
                     comment='Running at stage=0 because YOLO'
                     css={this.getStackItemCss()} />
          <StackItem title='PostCSS'
                     url='https://github.com/postcss/postcss'
                     img={require('./img/postcss.svg')}
                     comment='Using the following plugins/extensions/tools'
                     css={this.getStackItemCss()}>
            <ul className={this.props.css.newList}>
              {this.renderSubItem('css-modules',
                require('./img/css-modules_s.png'),
                'https://github.com/css-modules/css-modules'
              )}
              {this.renderSubItem('cssnext',
                require('./img/cssnext_s.png'),
                'http://cssnext.io/'
              )}
              {this.renderSubItem('autoprefixer',
                require('./img/autoprefixer.svg'),
                'https://www.npmjs.com/package/autoprefixer'
              )}
              {this.renderSubItem('react-styleable',
                require('./img/ps_s.png'),
                'https://www.npmjs.com/package/react-styleable'
              )}
            </ul>
          </StackItem>
          <StackItem title='React'
                     url='http://facebook.github.io/react/'
                     img={require('./img/react.svg')}
                     css={this.getStackItemCss()} />
        </ul>
      </div>
    )
  }
}
