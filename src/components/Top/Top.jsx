import "./Top.css";
function Top({ title, subtitle }) {
  return (
    <div className="top">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

export default Top;
