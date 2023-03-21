import React from 'react'

import { ContentDiv, Header, SubHeader, Para } from '../CourseStages/StyledCmp'
function JavaScript() {
  return (
    <div>
        <Header>Javascript Programming Language</Header>
        <ContentDiv>
            <SubHeader>What is JavaScript ?</SubHeader>
            <Para>JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites when applied to an HTML document.</Para>
            <Para>It was introduced in the year 1995 for adding programs to the webpages in the Netscape Navigator browser. Since then, it has been adopted by all other graphical web browsers. With JavaScript, users can build modern web applications to interact directly without reloading the page every time. The traditional website uses js to provide several forms of interactivity and simplicity.</Para>
            <Para>Although, JavaScript has no connectivity with Java programming language. The name was suggested and provided in the times when Java was gaining popularity in the market. In addition to web browsers, databases such as CouchDB and MongoDB uses JavaScript as their scripting and query language.</Para>
            <SubHeader>Features of JavaScript</SubHeader>
            <Para>There are following features of JavaScript:</Para>
            <Para>1. All popular web browsers support JavaScript as they provide built-in execution environments.</Para>
            <Para>2. JavaScript follows the syntax and structure of the C programming language. Thus, it is a structured programming language.</Para>
            <Para>3. JavaScript is a weakly typed language, where certain types are implicitly cast (depending on the operation).</Para>
            <Para>4. JavaScript is an object-oriented programming language that uses prototypes rather than using classes for inheritance.</Para>
            <Para>5. It is a light-weighted and interpreted language.</Para>
            <Para>6. It is a case-sensitive language.</Para>
            <Para>7. JavaScript is supportable in several operating systems including, Windows, macOS, etc.</Para>
        </ContentDiv>
    </div>
  )
}

export default JavaScript