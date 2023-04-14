import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Poke from "../Poke/Poke";
import Alert from "../Alert/Alert";
import "./Home.css";
import image from "../../pokedex-icon-28.png";
import { apiErrorMessage, apiBaseUrl } from "../../constants/constants";

function Home() {
  const [data, setData] = useState({});
  const [apiRequestCompleted, setAPIRequestCompleted] = useState(false);
  //Getting the information from the API
  useEffect(() => {
    axios.get(apiBaseUrl).then((res) => {
      setData(res.data);
      setAPIRequestCompleted(true);
    });
  }, []);

  const content = useMemo(() => {
    if (apiRequestCompleted) {
      if (data?.results) {
        return data?.results?.map((item, i) => (
          <Poke key={i} name={item.name} url={item.url} />
        ));
      }

      return <Alert msg={apiErrorMessage} />;
    }

    return null;
  }, [data, apiRequestCompleted]);

  //Returning the information from the API to POKE
  return (
    <div id="background">
      <header>
        <img id="logo" src={image} alt="logo"></img>
        <h1 id="heading">Pokédex</h1>
      </header>

      <div className="app">{content}</div>
    </div>
  );
}
//Exporting Home as default
export default Home;
