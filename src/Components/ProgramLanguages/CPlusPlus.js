import React from 'react'

import { ContentDiv, Header, SubHeader, Para, } from '../CourseStages/StyledCmp'
function CPlusPlus() {
  return (
    <div>
      <Header>C++ Programming Language</Header>
      <ContentDiv>
        <SubHeader>What is C++ ?</SubHeader>
        <Para>C++ is a general purpose, case-sensitive, free-form programming language that supports object-oriented, procedural and generic programming.</Para>
        <Para>C++ is a middle-level language, as it encapsulates both high and low level language features.</Para>
        <SubHeader>C++ features</SubHeader>
        <Para>C++ is a widely used programming language.</Para>
        <Para>C++ is a simple language because it provides a structured approach (to break the problem into parts), a rich set of library functions, data types, etc.</Para>
        <Para>In C++, complex data types called Abstract Data Types (ADT) can be created using classes.</Para>
        <Para>C++ is a portable language and programs made in it can be run on different machines.</Para>
        <Para>C++ includes both low-level programming and high-level language so it is known as a mid-level and intermediate programming language. It is used to develop system applications such as kernel, driver, etc.</Para>
        <Para>C++ provides very efficient management techniques. The various memory management operators help save the memory and improve the program's efficiency. These operators allocate and deallocate memory at run time. Some common memory management operators available C++ are new, delete etc.</Para>
        <Para>C++ programs tend to be compact and run quickly. Hence the compilation and execution time of the C++ language is fast.</Para>
      </ContentDiv>
    </div>
  )
}

export default CPlusPlus