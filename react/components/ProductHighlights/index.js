import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import HtmlParser from 'react-html-parser'


import styles from './styles.css'

/**
 * Product Specification Component.
 * Render the technical specifications of a product. Can be displayed in two views: Table view or Tabs view.
 */
class ProductHighlights extends Component {


  render() {
    const { highlights } = this.props;

    return (
      <ul>
        {highlights.map((item, i) => (
          <li key={i} >{item.name}: <span className={`t-small`}>{item.name}</span> </li>
        ))}
      </ul>
    )
  }
}

ProductHighlights.defaultProps = {
  highlights: [],
  tabsMode: false
}

ProductHighlights.propTypes = {
  /** Intl object to provides internationalization */
  intl: intlShape.isRequired,
  /** Specifications that will be displayed on the table */
  highlights: PropTypes.arrayOf(
    PropTypes.shape({
      /** Specification name */
      name: PropTypes.string.isRequired,
      /** Specifications value */
      values: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
}

export default injectIntl(ProductHighlights)