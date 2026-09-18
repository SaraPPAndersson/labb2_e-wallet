import vendors from "../../data/vendorDetail";
import { useNavigate } from "react-router-dom";
import "./CardForm.css";
import chipIcon from "../../assets/chip-dark.svg";

function formatCardNumberPreview(number) {
  const padded = (number + "XXXXXXXXXXXXXXXX").slice(0, 16);
  {
    return padded.match(/.{1,4}/g).join(" ");
  }
}
function formatCcvPreview(number) {
  return (number + "XXX").slice(0, 3);
}

function CardForm({
  cardNumber,
  cardHolder,
  validDate,
  ccv,
  vendor,
  onCardNumberChange,
  onCardHolderChange,
  onValidDateChange,
  onCcvChange,
  onVendorChange,
  onSubmit,
}) {
  const selectedVendor = vendors.find((v) => v.name === vendor);
  const navigate = useNavigate();
  return (
    <>
      <div
        className="newCardPreview"
        style={{
          backgroundColor: selectedVendor?.color,
          color: vendor === "NINJA BANK" ? "white" : "black",
        }}
      >
        <div className="previewTopRow">
          <img src={chipIcon} alt="" className="previewChip" />
          {selectedVendor && (
            <img
              src={selectedVendor.icon}
              alt={selectedVendor.name}
              className="vendorIcon"
            />
          )}
        </div>
        <p className="cardPreviewNumber">
          {formatCardNumberPreview(cardNumber)}
        </p>
        <div className="previewBottomRow">
          <div>
            <span className="previewCardHolderLabel">CARDHOLDER NAME</span>
            <p className="cardPreviewHolder">{cardHolder}</p>
          </div>
          <div>
            <span className="previewValidDateLabel">Valid thru</span>
            <p className="cardPreviewValidDate">{validDate}</p>
          </div>
        </div>
        <p className="cardPreviewCcv">{formatCcvPreview(ccv)}</p>
        {selectedVendor && (
          <img
            src={selectedVendor.icon}
            alt={selectedVendor.name}
            className="vendorIcon"
          />
        )}
      </div>
      <form onSubmit={onSubmit}>
        <label htmlFor="cardNumber">CARD NUMBER</label>
        <input
          type="text"
          required
          maxLength={16}
          value={cardNumber}
          onChange={onCardNumberChange}
        />

        <label htmlFor="cardHolder">CARDHOLDER NAME</label>
        <input
          type="text"
          required
          value={cardHolder}
          onChange={onCardHolderChange}
        />

        <div className="formRow">
          <div>
            <label htmlFor="validDate">VALID THRU</label>
            <input
              type="text"
              required
              maxLength={5}
              placeholder="MM/YY"
              value={validDate}
              onChange={onValidDateChange}
            />
          </div>

          <div>
            <label htmlFor="ccv">CCV</label>
            <input
              type="text"
              maxLength={3}
              required
              placeholder="XXX"
              value={ccv}
              onChange={onCcvChange}
            />
          </div>
        </div>

        <label htmlFor="vendor">VENDOR</label>
        <select id="vendor" value={vendor} onChange={onVendorChange}>
          <option value="">Choose vendor</option>
          {vendors.map((vendor) => (
            <option key={vendor.name} value={vendor.name}>
              {vendor.name}
            </option>
          ))}
        </select>
        <button className="AddCardButton" type="submit">
          Add card
        </button>
        <button
          className="ViewCardButton"
          type="button"
          onClick={() => navigate("/")}
        >
          View my cards
        </button>
      </form>
    </>
  );
}

export default CardForm;
