import { useContext } from "react";
import { CurrentPokeContext } from "../../contexts/CurrentPokeContext";
import "./Entry.css";

const Entry = () => {
  const { poke } = useContext(CurrentPokeContext);
  console.log(poke);

  return (
    <div className="entry">
      <div className="entry__grid-item entry__title">
        <h1>{poke.name}</h1>
        <p>Pokedex #{poke.id}</p>
      </div>
      <div className="entry__grid-item entry__sprites">
        <img src={poke.sprites.front_default} alt={poke.name} />
        <img src={poke.sprites.front_shiny} alt={poke.name + " Shiny"} />
      </div>
      <div className="entry__grid-item entry__types">
        <label>Types</label>
        <p>{poke.types[0].type.name}</p>
        <p>{poke.types[1].type.name}</p>
      </div>
      <div className="entry__grid-item entry__hw">
        <p>
          Height: {poke.height * 0.1}m / {poke.height * 0.1 * 3.28084}ft
        </p>
        <p>Weight: {poke.weight * 0.1}kg</p>
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

      <div className="entry__grid-item entry__stats">
        <label>Base Stats</label>
        <ul>
          {poke.stats.map((stat) => {
            return (
              <li>
                {stat.stat.name}: {stat.base_stat}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Entry;
