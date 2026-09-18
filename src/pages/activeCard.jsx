import { useDispatch, useSelector } from "react-redux";
import { removeCard, setActiveCard } from "../reducers/cardReducer";
import { Link } from "react-router-dom";
import Top from "../components/Top/Top";
import CardStack from "../components/CardStack/CardStack";
import Card from "../components/Cards/Card";

function AddedCardList() {
  const cardList = useSelector((state) => state.cards.items);
  const dispatch = useDispatch();
  const [activeCard, ...otherCards] = cardList;

  function confirmToRemove(id) {
    const confirm = window.confirm("Remove card");
    if (confirm) {
      dispatch(removeCard(id));
    }
  }

  function handleSetActive(id) {
    dispatch(setActiveCard(id));
  }
  return (
    <div>
      <Top title="E-WALLET" subtitle="ACTIVE CARD" />
      {!activeCard && <p>No cards</p>}
      <ul className="activeCardWrapper">
        {activeCard && (
          <Card
            card={activeCard}
            onRemove={confirmToRemove}
            onSetActive={handleSetActive}
          />
        )}
      </ul>

      {activeCard && (
        <button
          className="removeButton"
          onClick={() => confirmToRemove(activeCard.id)}
        >
          Remove Card
        </button>
      )}
      <CardStack cards={otherCards} onSetActive={handleSetActive} />

      <Link to={"/addCard"}>
        <button className="AddCardButton-Home" type="submit">
          Add new card
        </button>
      </Link>
    </div>
  );
}

export default AddedCardList;
