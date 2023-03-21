import React from 'react'

import { ContentDiv, Header, SubHeader, Para } from './StyledCmp'
function Dsa() {
  return (
    <div>
      <Header>Introduction to DSA</Header>
      <ContentDiv>
        <SubHeader>What is DSA?</SubHeader>
        <Para>The term DSA stands for Data Structures and Algorithms. As the name itself suggests, it is a combination of two separate yet interrelated topics – Data Structure and Algorithms.</Para>
        <SubHeader>What is DataStructures?</SubHeader>
        <Para>A data structure is defined as a particular way of storing and organizing data in our devices to use the data efficiently and effectively. The main idea behind using data structures is to minimize the time and space complexities. An efficient data structure takes minimum memory space and requires minimum time to execute the data.</Para>
        <SubHeader>What is Algorithm?</SubHeader>
        <Para>Algorithm is defined as a process or set of well-defined instructions that are typically used to solve a particular group of problems or perform a specific type of calculation. To explain in simpler terms, it is a set of operations performed in a step-by-step manner to execute a task.</Para>
        <SubHeader>How to start learning DSA?</SubHeader>
        <Para>The first and foremost thing is dividing the total procedure into little pieces which need to be done sequentially.</Para>
        <Para>The complete process to learn DSA from scratch can be broken into 4 parts:</Para>
        <Para>1. Learn about Time and Space complexities</Para>
        <Para>2. Learn the basics of individual Data Structures</Para>
        <Para>3. Learn the basics of Algorithms</Para>
        <Para>4. Practice Problems on DSA</Para>
        <SubHeader>Types of DataStructure</SubHeader>
        <Para>  * A linear data structure only has one level and performs linear searching in the data structure. We can therefore traverse all elements in a single run. Because computer memory is linearly arranged, linear data structures are simple to implement. Linear data structure examples are array, linked list, stack, queue, etc.</Para>
        <Para>  * A non-linear data structure is another important type in which data elements are not arranged sequentially; mainly, data elements are arranged in random order without forming a linear structure.Trees and Graphs are the types of non-linear data structures.</Para>

        <Para></Para>
      </ContentDiv>
    </div>
  )
}

export default Dsa