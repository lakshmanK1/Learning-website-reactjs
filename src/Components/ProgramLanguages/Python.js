import React from 'react'

import { ContentDiv, SubHeader, Header, Para } from '../CourseStages/StyledCmp'
function Python() {
  return (
    <div>
        <Header>Python Programming language</Header>
        <ContentDiv>
            <SubHeader>What is Python?</SubHeader>
            <Para>Python is a general purpose, dynamic, high-level, and interpreted programming language. It supports Object Oriented programming approach to develop applications. It is simple and easy to learn and provides lots of high-level data structures.</Para>
            <Para>Python is easy to learn yet powerful and versatile scripting language, which makes it attractive for Application Development.</Para>
            <Para>Python's syntax and dynamic typing with its interpreted nature make it an ideal language for scripting and rapid application development.</Para>
            <Para>Python supports multiple programming pattern, including object-oriented, imperative, and functional or procedural programming styles.</Para>
            <Para>Python is not intended to work in a particular area, such as web programming. That is why it is known as multipurpose programming language because it can be used with web, enterprise, 3D CAD, etc.</Para>
            <Para>We don't need to use data types to declare variable because it is dynamically typed so we can write a=10 to assign an integer value in an integer variable.</Para>
            <SubHeader>Python Features</SubHeader>
            <Para>Python provides many useful features which make it popular and valuable from the other programming languages. It supports object-oriented programming, procedural programming approaches and provides dynamic memory allocation. We have listed below a few essential features.</Para>
            <Para>Python is easy to learn as compared to other programming languages. Its syntax is straightforward and much the same as the English language. There is no use of the semicolon or curly-bracket, the indentation defines the code block. It is the recommended programming language for beginners.</Para>
            <Para>Python can perform complex tasks using a few lines of code. A simple example, the hello world program you simply type print("Hello World"). It will take only one line to execute, while Java or C takes multiple lines.</Para>
            <Para>Python is an interpreted language; it means the Python program is executed one line at a time. The advantage of being interpreted language, it makes debugging easy and portable.</Para>
            <Para>Python can run equally on different platforms such as Windows, Linux, UNIX, and Macintosh, etc. So, we can say that Python is a portable language. It enables programmers to develop the software for several competing platforms by writing a program only once.</Para>
            <Para>Python is freely available for everyone. It is freely available on its official website www.python.org. It has a large community across the world that is dedicatedly working towards make new python modules and functions. Anyone can contribute to the Python community. The open-source means, "Anyone can download its source code without paying any penny."</Para>
            <Para>Python supports object-oriented language and concepts of classes and objects come into existence. It supports inheritance, polymorphism, and encapsulation, etc. The object-oriented procedure helps to programmer to write reusable code and develop applications in less code.</Para>
        </ContentDiv>
    </div>
  )
}

export default Python