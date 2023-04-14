import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./FullPoke.css";
import "../button.css";
import { apiBaseUrl } from "../../constants/constants";
import { pokeCardTitles } from "../../constants/constants";
// Component for individual Pokemon information Page
function FullPoke() {
  const { id } = useParams();
  const [data, setData] = useState({});
  //Getting the pokemon's information
  useEffect(() => {
    axios.get(`${apiBaseUrl}/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  //Returning the HTML for the page
  return (
    <div id="background">
      <div id="container">
        <button id="home">
          <Link to="/">{pokeCardTitles.back}</Link>
        </button>
        <img id="image" src={data?.sprites?.front_default} alt={data.name} />
        <h1>{data?.name}</h1>
        <h3>{pokeCardTitles.weightFormatter(data?.weight)}</h3>
        <div id="box">
          <h3>{pokeCardTitles.moves}</h3>
          <ul>
            {data?.moves?.map((item, i) => (
              <li key={i}>{item.move.name}</li>
            ))}
          </ul>
          <h3>{pokeCardTitles.abilities}</h3>
          <ul>
            {data?.abilities?.map((item, i) => (
              <li key={i}>{item.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
//Exporting the FullPoke Component
export default FullPoke;
