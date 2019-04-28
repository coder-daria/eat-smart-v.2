import React from "react";

import { loremIpsum } from "../../static/hardcoded";

import Card from "../../components/Card";

import { 
  BackgroundImageWrapper, 
  BackgroundLayer, 
  Content, 
  Description, 
  Introduction, 
  Text, 
} from "./styles";

const data = [
  {
    src: "https://i.iplsc.com/wbrew-powszechnej-opinii-truskawki-nie-wywoluja-uczulenia/0006MQAB5GX9ISJ9-C122-F4.jpg",
    text: loremIpsum,
  },
  {
    src: "https://i.iplsc.com/wbrew-powszechnej-opinii-truskawki-nie-wywoluja-uczulenia/0006MQAB5GX9ISJ9-C122-F4.jpg",
    text: loremIpsum,
  },
  {
    src: "https://i.iplsc.com/wbrew-powszechnej-opinii-truskawki-nie-wywoluja-uczulenia/0006MQAB5GX9ISJ9-C122-F4.jpg",
    text: loremIpsum,
  },
  {
    src: "https://i.iplsc.com/wbrew-powszechnej-opinii-truskawki-nie-wywoluja-uczulenia/0006MQAB5GX9ISJ9-C122-F4.jpg",
    text: loremIpsum,
  },
];

const LandingPage: React.FC = () => (
  <Content>
    <Introduction>
      <BackgroundLayer />
      <BackgroundImageWrapper>
        <img 
          height="100%"
          src="https://img.taste.com.au/KZJZuz9r/taste/2016/11/fruity-smoothie-bowl-106970-1.jpeg" 
          width="100%"
        />
      </BackgroundImageWrapper>
      <Text>
        <span>Eat Smart App</span>
        <span>Make healthy choices everyday!</span>
      </Text>
    </Introduction>
    <Description>
      {data.map((cardData, index) => {
        return <Card text={cardData.text} src={cardData.src} key={index}/>
      })}
    </Description>
  </Content>
);
export default LandingPage;

