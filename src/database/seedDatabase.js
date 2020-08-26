const axios = require("axios");
const Planet = require('../app/models/planet');

const SWAPI_HOST = "https://swapi.dev/api/";
const TOTAL_PLANETS = 60;

const createPlanets = [...new Array(TOTAL_PLANETS)].map(async (_, i) => {
  const planetId = i + 1;
  const {
    data: { name, climate, terrain, films },
  } = await axios.get(`${SWAPI_HOST}planets/${planetId}/`);
  const dadosPlaneta = {
    nome: name,
    clima: climate,
    terreno: terrain,
    aparicoesFilmes: films.length,
  };
  const planeta = new Planet(dadosPlaneta);
  const result = await planeta.save();
  console.log(result);
});

(async () => {
  await Promise.all(createPlanets).catch((err)=>{
      console.log(err);
  });
  console.log("Seed do banco de dados criado com sucesso!");
})();
