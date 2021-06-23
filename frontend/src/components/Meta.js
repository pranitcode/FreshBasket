import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: ' 🥦 Welcome to fresh basket',
  description: 'We sell the fresh fruits and vegetable',
  keywords: 'Fruits, buy vegetable, cheap fresh fruits',
}

export default Meta
