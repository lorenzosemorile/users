import {useEffect, useRef, useState} from "react";
import caret from '../assets/caret.svg';
import {GenderList} from "../components/GenderList";
import {Cards} from "../components/Cards";
import {Toolbar} from "../components/Toolbar";

export const Home = () => {

  const [cards, setCards] = useState([]);

  const sortByGender = (gender) => {
    const orderedCards = cards.reduce((acc, card ) => {
      if (card.gender === gender.id){
        acc.unshift(card);
      }else {
        acc.push(card);
      }
      return acc;
    }, []);

    setCards(orderedCards);
  }


  useEffect(() => {

    const fetchResults = async () => {
      const response = await fetch('https://randomuser.me/api/?results=50');
      const res = await response.json();
      setCards(res.results);
    }

    fetchResults();

  }, [])

  return (
    <div className="home">
      <div className="home home__container">
        <aside className="sidebar" />
        <main>
          <Toolbar total={cards.length} onGenderChange={sortByGender} />
          <Cards cards={cards} />
        </main>
      </div>
    </div>

  )
}