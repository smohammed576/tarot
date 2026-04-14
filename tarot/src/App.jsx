import { useEffect, useState } from "react";
import data from "./assets/cards.json";

function App(){
  const [cards, setCards] = useState([]);
  // const [chosen, setChosen] = useState({
  //   0: [],
  //   1: [],
  //   2: []
  // });
  const [chosen, setChosen] = useState([
    {
      id: 0,
      card: []
    },
    {
      id: 1,
      card: []
    },
    {
      id: 2,
      card: []
    }
  ]);

  useEffect(() => {
    setCards(data);
  }, []);

  console.log(data);

  const pickCard = (event) => {
    console.log(event.target.id);
    let id = event.target.id;
    let pick = Math.floor(Math.random() * cards.length);
    // let card = chosen.find((card) => card == event.target.id);
    // let updated = 
    setChosen(prev => 
      // {...prev, chosen.id: cards[pick]}
    
      chosen.map((card) => {
        if(card.id == event.target.id){
          // return cards[pick];
          return cards[pick];
        }
        else{
          return card;
        }
      })
    );
  }

  console.log(chosen);
  
  return(
    <>
      <header className="header">tarot</header>
      <main className="main">
        <section className="table">
          <span className="table__wrapper">
            <button id="0" className="table__spot" onClick={pickCard}>{chosen[0].name == null ? 'x' : <img src={chosen[0].image} alt="" /> }</button>
            <button id="1" className="table__spot" onClick={pickCard}>{chosen[1].name == null ? 'x' : <img src={chosen[1].image} alt="" /> }</button>
            <button id="2" className="table__spot" onClick={pickCard}>{chosen[2].name == null ? 'x' : <img src={chosen[2].image} alt="" /> }</button>
            {/* <figure className="table__spot"></figure>
            <figure className="table__spot"></figure>
            <figure className="table__spot"></figure> */}
          </span>
        </section>
      </main>
    </>
  );
}

export default App;