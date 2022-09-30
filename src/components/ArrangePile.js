import React from 'react';
import styled from 'styled-components';
import { addSelectedToCards } from '../utils';
import Card from './Card';
import CardPlaceholder from './CardPlaceholder';

function ArrangePile({ pile, setSelectedCards, selectedCards, pileIndex }) {
  if (pile.includes(selectedCards[0])) {
    addSelectedToCards(pile, selectedCards);
  } else {
    pile.map((card) => delete card.selected);
  }

  if (pile.length > 0) {
    return (
      <Pile>
        {pile.map((cart, i) => (
          <Card
            key={`${cart.id}${cart.category}`}
            cart={cart}
            cartIndex={i.toString()}
            setSelectedCards={setSelectedCards}
          />
        ))}
      </Pile>
    );
  }
  return (
    <div
      onClick={() => {
        setSelectedCards((prev) => [...prev, pileIndex]);
      }}
    >
      <CardPlaceholder />
    </div>
  );
}

const Pile = styled.div`
  height: 200px;
  width: 100px;
  position: relative;
`;

export default ArrangePile;
