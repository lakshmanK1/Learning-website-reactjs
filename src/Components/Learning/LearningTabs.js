import React from 'react'

import { LearningTabsDiv, TabDiv } from './StyledLearning';

const Tabs = [
    {id:1, title:'Basics', activeCol:'#38E54D'}, {id:2, title:'Programming Language', activeCol:'#38E54D'},
    {id:3, title:'DSA', activeCol:'#38E54D'}, {id:4, title:'Simple Program', activeCol:'#38E54D'}, {id:5, title:'Complex Program', activeCol:'#38E54D'}
];

function LearningTabs({activeTab, setActiveTab}) {
  return (
    <LearningTabsDiv>
        {
            Tabs.map((item)=>(
                <TabDiv key={item.id} onClick={()=>setActiveTab(item.title)} style={{color:`${activeTab === item.title ? item.activeCol : ''}`}}>
                    {item.title}
                </TabDiv>
            ))
        }
    </LearningTabsDiv>
  );
}

export default LearningTabs