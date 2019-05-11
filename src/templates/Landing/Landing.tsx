import * as React from "react";

import { cardsData as cards } from "../../static/hardcoded";

import Card from "../../components/Card";

import { 
  BackgroundImageWrapper, 
  BackgroundLayer, 
  Description, 
  Hero, 
  Text, 
} from "./styles";

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
      {cards.map((card, index) => {
        const isEven = index%2 === 0;

        return (
        <Card 
          description={card.description}
          isReversed={isEven}
          key={index}
          src={card.src} 
        />
        )
      })}
    </Description>
  </>
);
export default LandingPage;

