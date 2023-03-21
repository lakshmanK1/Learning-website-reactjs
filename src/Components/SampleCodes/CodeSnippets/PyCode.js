import React from 'react'
import Highlight from 'react-highlight'

function PyCode({coding}) {
  return (
    <div>
      <Highlight innerHTML={true}>{`<P>Addition of two number.</p>`}</Highlight>
      <Highlight language="javascript">{coding.PythonPro.code}</Highlight>
      <Highlight>
        output:
        {coding.PythonPro.output}
      </Highlight>
    </div>
  )
}

export default PyCode