const axios = require("axios");
const Planeta = require('../app/models/planeta');

const SWAPI_HOST = "https://swapi.dev/api/";
const TOTAL_PLANETAS = 60;

const criaPlanetas = [...new Array(TOTAL_PLANETAS)].map(async (_, i) => {
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
  const novoPlaneta = new Planeta(dadosPlaneta);
  const resultado = await novoPlaneta.save();
  console.log(resultado);
});

(async () => {
  await Promise.all(criaPlanetas).catch((err)=>{
      console.log(err);
  });
  console.log("Seed do banco de dados criado com sucesso!");
})();
