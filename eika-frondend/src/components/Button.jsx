export default function Button({ title, onClick }) {
  return (
    <button className="buttonMain" onClick={onClick}>
      {title}
    </button>
  );
}
