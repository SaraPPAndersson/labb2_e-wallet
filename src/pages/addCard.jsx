import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewCard } from "../reducers/cardReducer";
import { useNavigate } from "react-router-dom";
import Top from "../components/Top/Top";
import CardForm from "../components/Cardform/CardForm";

function AddNewCardPage() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [validDate, setValidDate] = useState("");
  const [ccv, setCcv] = useState("");
  const [vendor, setVendor] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      addNewCard({
        cardNumber,
        cardHolder,
        validDate,
        ccv,
        vendor,
      }),
    );

    setCardNumber("");
    setCardHolder("");
    setValidDate("");
    setCcv("");
    setVendor("");

    navigate("/");
  }

  return (
    <>
      <Top title="Add a new bank card" subtitle="NEW CARD" />
      <CardForm
        cardNumber={cardNumber}
        cardHolder={cardHolder}
        validDate={validDate}
        ccv={ccv}
        vendor={vendor}
        onCardNumberChange={(e) => setCardNumber(e.target.value)}
        onCardHolderChange={(e) => setCardHolder(e.target.value)}
        onValidDateChange={(e) => setValidDate(e.target.value)}
        onCcvChange={(e) => setCcv(e.target.value)}
        onVendorChange={(e) => setVendor(e.target.value)}
        onSubmit={handleSubmit}
      />
    </>
  );
}
export default AddNewCardPage;
