import * as React from 'react'
import axios from 'axios'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const Pokedex = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("")

const getPokemon = async () => {
        const toArray = [];
        try {
            const url = https://pokeapi.co/api/v2/pokemon/${pokemon};
            const res = await axios.get(url);
            toArray.push(res.data);
            setPokemonType(res.data.types[0].type.name);
            setPokemonData(toArray);
            console.log(pokemonData)
            console.log(url);
            console.log(res.data.id)
            console.log(res.data)
            console.log(res.data.stats[0].stat.name)
        } catch (e) {
            console.log(e);
        }

    };

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  }

  return (
    <div pageTitle="pokedex">
      onSubmit={handleSubmit}>
        <label>
          <input
            type = "text"
            onChange={handleChange}
            placeholder="Enter Pokemon Name"
           />

        </label>
      </form>
      {pokemonData.map((data) => {
        return(
          <div className = "container">
            <img src={data.sprites["front_default"]}/>
            <div className="divTable">
              <div className="divTableBody"></div>
              <div className="divTableRow">
                <div className="divTableCell">Type</div>
                <div className="divTableCell">{pokemonType}</div>
              <div className="divTableRow">
                <div className="divTableCell">Height</div>
                <div className="divTableCell">
                  {" "}
                  {Math.round(data.height * 3.9)} "
                </div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Weight</div>
                <div className="divTableCell">{" "} {Math.round(data.weight / 4.3)} lbs</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Number of Battle</div>
                <div className="divTableCell">{data.game_indices.length}</div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={
                    [
                        {
                            subject: "HP",
                            A:data.stats[0].base_stat,
                            fullMark: 200,
                        }
                        {
                            subject: "Attack",
                            A:data.stats[1].base_stat,
                            fullMark: 200,
                        }
                        {
                            subject: "Defense",
                            A:data.stats[2].base_stat,
                            fullMark: 200,
                        }
                        {
                            subject: "Special Attack",
                            A:data.stats[3].base_stat,
                            fullMark: 200,
                        }
                        {
                            subject: "Special Defense",
                            A:data.stats[4].base_stat,
                            fullMark: 200,
                        }
                        {
                            subject: "Speed",
                            A:data.stats[5].base_stat,
                            fullMark: 200,
                        }
                    ]
                
                
                }>


                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis />
                  <Radar name="PokeStats" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
          </ResponsiveContainer>
          </div>
        );
      })}

        </div>
  );
};

export default Pokedex