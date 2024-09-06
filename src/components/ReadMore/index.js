import {useState} from 'react'

import {
  BgContainer,
  Content,
  Heading,
  Description,
  Paragraph,
  HookImage,
  Button,
} from './styledComponents'

export default function ReadMore(props) {
  const {reactHooksDescription} = props
  const [showFullText, updateText] = useState('False')
  const para = reactHooksDescription.slice(0, 170)
  const paragraph = showFullText ? para : reactHooksDescription
  const buttonText = showFullText ? 'Read More' : 'Read Less'

  const changeText = () => {
    updateText(prevState => !prevState)
  }

  return (
    <BgContainer>
      <Content>
        <Heading>React Hooks</Heading>
        <Description>Hooks are a new addition to React</Description>
        <HookImage
          alt="react hooks"
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        />
        <Paragraph>{paragraph}</Paragraph>
        <Button onClick={changeText}>{buttonText}</Button>
      </Content>
    </BgContainer>
  )
}
