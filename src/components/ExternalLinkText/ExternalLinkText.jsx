import React from 'react'
import { ExternalLink } from 'react-external-link'

const ExternalLinkText = ({href, text = "Link"}) => {
  return (
    <ExternalLink className="external-link" href={href}>
      <span className="external-link-text">{text}</span>
    </ExternalLink>
  )
}

export default ExternalLinkText