import React from 'react'

import { ContentDiv, SubHeader, Header, TopicHeader, Para } from '../CourseStages/StyledCmp'
function Java() {
  return (
    <div>
        <Header>JAVA programming Language basics</Header>
        <ContentDiv>
            <SubHeader>What is Java?</SubHeader>
            <Para>Java is a high-level, general-purpose, object-oriented, and secure programming language developed by James Gosling at Sun Microsystems,
                 Inc. in 1991. It is formally known as OAK. In 1995, Sun Microsystem changed the name to Java. In 2009, Sun Microsystem takeover by Oracle Corporation.
            </Para>
            <SubHeader>Editions of Java</SubHeader>
            <Para>Each edition of Java has different capabilities. There are three editions of Java:</Para>
            <Para>Java Standard Editions (JSE): It is used to create programs for a desktop computer.</Para>
            <Para>Java Enterprise Edition (JEE): It is used to create large programs that run on the server and manages heavy traffic and complex transactions.</Para>
            <Para>Java Micro Edition (JME): It is used to develop applications for small devices such as set-top boxes, phone, and appliances.</Para>
            <SubHeader>Types of Java Applications</SubHeader>
            <Para>There are four types of Java applications that can be created using Java programming:</Para>
            <Para>Standalone Applications: Java standalone applications uses GUI components such as AWT, Swing, and JavaFX. These components contain buttons, list, menu, scroll panel, etc. It is also known as desktop alienations.</Para>
            <Para>Enterprise Applications: An application which is distributed in nature is called enterprise applications.</Para>
            <Para>Web Applications: An applications that run on the server is called web applications. We use JSP, Servlet, Spring, and Hibernate technologies for creating web applications.</Para>
            <Para>Mobile Applications: Java ME is a cross-platform to develop mobile applications which run across smartphones. Java is a platform for App Development in Android.</Para>
            
        </ContentDiv>
    </div>
  )
}

export default Java