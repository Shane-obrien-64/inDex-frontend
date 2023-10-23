import Preloader from "../Preloader/Preloader";
import { useContext } from "react";
import { CurrentPokeContext } from "../../contexts/CurrentPokeContext";
import { IsLoadingContext } from "../../contexts/IsLoadingContext";
import { useParams } from "react-router-dom";
import typeList from "../../utils/consts";
import { useEffect } from "react";
import "./Entry.css";

const Entry = ({ handleGetPokemon }) => {
  const { loading } = useContext(IsLoadingContext);
  const { poke } = useContext(CurrentPokeContext);
  const { id } = useParams();

  useEffect(() => {
    handleGetPokemon(id);
  }, []);

  const getTotalStats = () => {
    let total = 0;
    poke.stats.forEach((stat) => {
      total += stat.base_stat;
    });
    return total;
  };

  const capitalizeWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div className="entry">
          <div className="entry__grid-item entry__title">
            <h1 className="entry__title-name">{capitalizeWord(poke.name)}</h1>
            <p className="entry__title-number">#{poke.id}</p>
          </div>

          <div className="entry__grid-item entry__sprites">
            <img
              className="entry__sprite"
              src={poke.sprites.front_default}
              alt={poke.name}
            />
            {poke.sprites.front_shiny !== null ? (
              <img
                className="entry__sprite"
                src={poke.sprites.front_shiny}
                alt={poke.name + " Shiny"}
              />
            ) : null}
          </div>

          <div className="entry__grid-item entry__types">
            {poke.types.map((type) => {
              const typeMatch = typeList.find(
                (item) => item.name === type.type.name
              );
              if (typeMatch) {
                return (
                  <img
                    className="entry__type-img"
                    src={typeMatch.url}
                    alt={typeMatch.name}
                    key={typeMatch.name}
                  />
                );
              }
              return null;
            })}
          </div>

          <div className="entry__grid-item entry__abilities">
            <h3 className="entry__abilities_title">Abilities:</h3>
            <div>
              {poke.abilities.map((ability) => {
                if (ability.is_hidden === true) {
                  return (
                    <p key={"hidden: " + ability.ability.name}>
                      Hidden: {ability.ability.name}
                    </p>
                  );
                }
                return <p key={ability.ability.name}>{ability.ability.name}</p>;
              })}
            </div>
          </div>

          <div className="entry__grid-item entry__hw">
            <p>Height: {poke.height / 10}m</p>
            <p>Weight: {poke.weight / 10}kg</p>
          </div>

          <div className="entry__grid-item entry__stats">
            <h2 className="entry__stats-label">Base stats:</h2>
            <ul className="entry__stats-list">
              <li className="entry__stat">
                <div>Total:</div>
                <div>{getTotalStats()}</div>
              </li>
              {poke.stats.map((stat) => {
                return (
                  <li className="entry__stat" key={stat.stat.name}>
                    <div>{stat.stat.name}:</div>
                    <div>{stat.base_stat}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
    //
  );
};

export default Entry;
