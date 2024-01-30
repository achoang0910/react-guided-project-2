import { Link } from "react-router-dom";
function Character({ name, id }) {
  const urlCharacter = `/character/${id}`;
  return (
    <span>
      <button>
        <Link to={urlCharacter}>{name}</Link>
      </button>
    </span>
  );
}

export default Character;
