import React from 'react'

const FlexContainer = (props) => (
  <div
    className={props.className}
    style={{
      display: props.container ? 'flex' : 'block',
      justifyContent: props.justifyContent || 'space-between',
      flexDirection: props.flexDirection || 'row',
      alignContent: props.alignContent || 'center',
      flexGrow: props.flexGrow || 0,
      flexBasis: props.flexBasis || 'auto',
      flexShrink: props.flexShrink || 1,
      flexWrap: props.flexWrap || 'nowrap',
      flex: props.flex || '0 1 auto',
      alignItems: props.alignItems || 'center',
      margin: props.margin || '0',
      padding: props.padding || '0',
      width: props.width || 'auto',
      height: props.height || 'auto',
      maxWidth: props.maxWidth || 'none',
    }}
  >
    {props.children || ''}
  </div>
)

export default FlexContainer
