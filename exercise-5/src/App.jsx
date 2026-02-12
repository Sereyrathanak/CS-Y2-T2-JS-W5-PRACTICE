import "./index.css";
import { Cardsdata } from "./data.js";

function App() {
  return (
    <div className="cards-container">
      {Cardsdata.map((card) => (
        <div key={card.id} className="card">
          <div className="card-photo">
            <img src={card.image} alt={card.name} />
          </div>
          <div className="card-info">
            <h2>{card.name}</h2>
            <p className="class">{card.className}</p>
            <p className="hobbies">{card.hobbies}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;