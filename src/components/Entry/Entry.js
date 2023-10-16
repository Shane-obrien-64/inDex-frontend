import { useContext } from "react";
import { CurrentPokeContext } from "../../contexts/CurrentPokeContext";
import types from "../../utils/consts";
import "./Entry.css";

const Entry = () => {
  const { poke } = useContext(CurrentPokeContext);
  console.log(poke);

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

  console.log(types);

  return (
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
        <img
          className="entry__sprite"
          src={poke.sprites.front_shiny}
          alt={poke.name + " Shiny"}
        />
      </div>
      <div className="entry__grid-item entry__types">
        <label>Types</label>
        {/* {poke.types.map((type) => {
          return <img src={types[0].url} alt={type.type.name} />;
        })} */}
      </div>
      <div className="entry__grid-item entry__abilities">
        <label>abilities</label>
        {poke.abilities.map((ability) => {
          if (ability.is_hidden === true) {
            return <p>Hidden: {ability.ability.name}</p>;
          }
          return <p>{ability.ability.name}</p>;
        })}
      </div>
      <div className="entry__grid-item entry__hw">
        <p>Height: {poke.height * 0.1}m</p>
        <p>Weight: {poke.weight * 0.1}kg</p>
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
              <li className="entry__stat">
                <div>{stat.stat.name}:</div>
                <div>{stat.base_stat}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Entry;
