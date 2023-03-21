import React from 'react'
import Highlight from 'react-highlight'
function CCode({coding}) {
  return (
    <div>
      <Highlight innerHTML={true}>{`<P>Addition of two number.</p>`}</Highlight>
      <Highlight language="javascript">{coding.CPro.code}</Highlight>
      <Highlight>
        output:
        {coding.CPro.output}
      </Highlight>
    </div>
  )
}

export default CCode