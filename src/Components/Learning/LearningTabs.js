import React from 'react'
import { useSelector } from 'react-redux';
import { LearningTabsDiv, TabDiv } from './StyledLearning';

function LearningTabs({activeTab, setActiveTab}) {

    const stageTabs = useSelector(state => state.LearnStages.Stages);

  return (
    <LearningTabsDiv>
        {
            stageTabs.map((item)=>(
                <TabDiv key={item.id} onClick={()=>setActiveTab(item.title)} style={{color:`${activeTab === item.title ? item.activeCol : ''}`}}>
                    {item.title}
                </TabDiv>
            ))
        }
    </LearningTabsDiv>
  );
}

export default LearningTabs