import vendors from "../../data/vendorDetail";
import chipIcon from "../../assets/chip-light.svg";
import "./Card.css";

function Card({ card, onSetActive }) {
  const selectedVendor = vendors.find((v) => v.name === card.vendor);

  return (
    <li
      className="card"
      style={{
        backgroundColor: selectedVendor?.color,
        color: card.vendor === "NINJA BANK" ? "white" : "black",
      }}
      onClick={() => onSetActive(card.id)}
    >
      <div className="cardTopRow">
        <img src={chipIcon} alt="" className="cardChip" />
        {selectedVendor && (
          <img
            src={selectedVendor.icon}
            alt={selectedVendor.name}
            className="cardVendorIcon"
          />
        )}
      </div>

      <p className="cardNumberText">{card.cardNumber}</p>
      <div className="cardBottomRow">
        <div>
          <span className="cardLabel">Cardholder Name</span>
          <p className="cardValue">{card.cardHolder}</p>
        </div>
        <div>
          <span className="cardLabel">Valid thru</span>
          <p className="cardValue">{card.validDate}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
