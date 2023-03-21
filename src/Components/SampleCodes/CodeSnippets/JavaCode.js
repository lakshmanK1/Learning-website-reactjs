import React from 'react'
import Highlight from 'react-highlight'

function JavaCode({coding}) {
  return (
    <div>
      <Highlight innerHTML={true}>{`<P>Addition of two number.</p>`}</Highlight>
      <Highlight language="javascript">{coding.JavaPro.code}</Highlight>
      <Highlight>
        output:
        {coding.JavaPro.output}
      </Highlight>
    </div>
  )
}

export default JavaCode