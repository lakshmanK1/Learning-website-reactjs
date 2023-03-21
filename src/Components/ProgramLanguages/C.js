import React from 'react'

import { ContentDiv, SubHeader, Header, TopicHeader, Para } from '../CourseStages/StyledCmp'

function C() {
  return (
    <div>
        <Header>C Programming Langauage</Header>
        <ContentDiv>
            <SubHeader>What is C Language?</SubHeader>
            <Para>The C Language is developed by Dennis Ritchie for creating system applications that directly
                 interact with the hardware devices such as drivers, kernels, etc.
            </Para>
            <Para>C programming is considered as the base for other programming languages, that is why it is known as mother language.</Para>
            <Para>It can be defined by the following ways:</Para>
            <Para>1. Mother language</Para>
            <Para>2. System programming language</Para>
            <Para>3. Procedure-oriented programming language</Para>
            <Para>4. Structured programming language</Para>
            <Para>5. Mid-level programming language</Para>
            <SubHeader>Features of C Language</SubHeader>
            <Para>C is a simple language in the sense that it provides a structured approach (to break the problem into parts), the rich set of library functions, data types, etc.</Para>
            <Para>Unlike assembly language, c programs can be executed on different machines with some machine specific changes. Therefore, C is a machine independent language.</Para>
            <Para>Although, C is intended to do low-level programming. It is used to develop system applications such as kernel, driver, etc. It also supports the features of a high-level language. That is why it is known as mid-level language.</Para>
            <Para>C is a structured programming language in the sense that we can break the program into parts using functions. So, it is easy to understand and modify. Functions also provide code reusability.</Para>
            <Para>It supports the feature of dynamic memory allocation. In C language, we can free the allocated memory at any time by calling the free() function.</Para>
        </ContentDiv>
    </div>
  )
}

export default C