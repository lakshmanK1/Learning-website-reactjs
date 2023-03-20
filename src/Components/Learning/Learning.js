import React,{useState} from 'react'
import Basics from '../CourseStages/Basics';
import ComplexProgram from '../CourseStages/ComplexProgram';
import Dsa from '../CourseStages/Dsa';
import Programming from '../CourseStages/Programming';
import SimpleProgram from '../CourseStages/SimpleProgram';
import LearningTabs from './LearningTabs';
import { LearningDiv } from './StyledLearning';

function Learning() {
    const [activeTab, setActiveTab] = useState("Basics");

    const switchingTabs = (tab) => {
        switch(tab){
            case "Basics":
                return <Basics/>

            case "Programming Language":
                return <Programming/>
                
            case "DSA":
                return <Dsa/>
                
            case "Simple Program":
                return <SimpleProgram/>  
               
            case "Complex Program":
                return <ComplexProgram/>    
        }
    }

  return (
    <LearningDiv>
        <LearningTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        {switchingTabs(activeTab)}
    </LearningDiv>
  );
}

export default Learning