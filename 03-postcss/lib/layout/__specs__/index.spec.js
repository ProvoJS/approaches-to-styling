import React from 'react/addons'
const TestUtils = React.addons.TestUtils
require('chai').should()

import Layout from '../index'

describe('layout', () => {
  it('renders', () => {
    const node = TestUtils.renderIntoDocument(React.createElement(Layout, {}))
    React.findDOMNode(node).should.exist
  })
})
