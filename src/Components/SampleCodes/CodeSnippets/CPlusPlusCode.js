import React from 'react'
import Highlight from 'react-highlight'

function CPlusPlusCode({coding}) {
  return (
    <div>
      <Highlight innerHTML={true}>{`<P>Addition of two number.</p>`}</Highlight>
      <Highlight language="javascript">{coding.CPlusPlusPro.code}</Highlight>
      <Highlight>
        output:
        {coding.CPlusPlusPro.output}
      </Highlight>
    </div>
  )
}

export default CPlusPlusCode