import Card from "../Cards/Card";

function CardStack({ cards, onRemove, onSetActive }) {
  if (!cards || cards.length === 0 ) {
    return null
  }
  return (
    <ul className="card-stack">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onRemove={onRemove}
          onSetActive={onSetActive}
        />
      ))}
    </ul>
  );
}

export default CardStack;
