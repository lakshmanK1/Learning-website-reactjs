import React from 'react'
import Highlight from 'react-highlight'

function JSCode({coding}) {
  return (
    <div>
      <Highlight innerHTML={true}>{`<P>Addition of two number.</p>`}</Highlight>
      <Highlight language="javascript">{coding.JavascriptPro.code}</Highlight>
      <Highlight>
        output:
        {coding.JavascriptPro.output}
      </Highlight>
    </div>
  )
}

export default JSCode