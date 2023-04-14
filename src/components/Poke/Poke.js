import React from "react";
import { Link } from "react-router-dom";
import "./Poke.css";
import "../button.css";
//Component for the page for displaying the pokemons
function Poke(props) {
  return (
    <div className="poke">
      <h1>{props.name}</h1>
      <br />
      <button>
        <Link to={props?.url?.split("/")[6]}>About</Link>
      </button>
      <br />
      <Link className="text-link" to={props.url}>
        {props.url}
      </Link>
      <br />
    </div>
  );
}

export default Poke;
