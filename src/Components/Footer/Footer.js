import React from 'react'
import { Icons } from './IconsArr'

import { FooterDiv, SocialIconsDiv, IconDiv, IconImage} from './StyledFooter'
function Footer() {
  return (
    <FooterDiv>
        <SocialIconsDiv>
            {
                Icons.map((img)=>(
                    <IconDiv key={img.id}>
                        <IconImage src={img.imageUrl}/>
                    </IconDiv>
                ))
            }
        </SocialIconsDiv>
    </FooterDiv>
  )
}

export default Footer