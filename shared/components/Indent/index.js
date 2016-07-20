import React from 'react'
import padding from 'util/padding'
import margin from 'util/margin'
import merge from 'lodash.merge'


function Indent(props) {
  // Additional wrapper with pt and mt needed to collapse child margins
  return (
    <div style={{ paddingTop: '1px', marginTop: '-1px' }}>
      <div style={merge(padding(props), margin(props))}>
        {props.children}
      </div>
    </div>
  )
}

export default Indent

