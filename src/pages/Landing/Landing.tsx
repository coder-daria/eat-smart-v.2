import React from "react";

import { loremIpsum } from "../../static/hardcoded";

import Card from "../../components/Card";

import { 
  BackgroundImageWrapper, 
  BackgroundLayer, 
  Description, 
  Hero, 
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
  <>
    <Hero>
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
    </Hero>
    <Description>
      {data.map((cardData, index) => {
        const isEven = index%2 === 0;

        return (
        <Card 
          isReversed={isEven}
          key={index}
          src={cardData.src} 
          text={cardData.text}
        />
        )
      })}
    </Description>
  </>
);
export default LandingPage;

