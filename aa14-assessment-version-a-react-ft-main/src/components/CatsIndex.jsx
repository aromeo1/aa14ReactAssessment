import { Link } from "react-router-dom";

function CatsIndex({ cats }) {
return (
<div>
  <h2>Cats Index</h2>
    {cats.map(cat => (
      <div key={cat.id}>
        <Link to={`/cats/${cat.id}`}>{cat.name}</Link>
      </div>
    ))}
  </div>
  );
}

export default CatsIndex;