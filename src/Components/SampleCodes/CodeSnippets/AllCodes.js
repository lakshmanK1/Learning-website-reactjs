import React,{useRef} from 'react'
import { AllCodeDiv, Option, Select } from './StyledCmp'


function AllCodes({prefered, setPrefered}) {
    const inputSelect = useRef();
  return (
    <AllCodeDiv>
        <Select ref={inputSelect} onChange={()=>setPrefered(inputSelect.current.value)}>
            <Option>select</Option>
            <Option>Java</Option>
            <Option>C</Option>
            <Option>C++</Option>
            <Option>Python</Option>
            <Option>Javascript</Option>
        </Select>
    </AllCodeDiv>
  )
}

export default AllCodes