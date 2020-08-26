const Planet = require("../models/Planet");

const createPlanet = async (request, response) => {
  const { nome, clima, terreno, aparicoesFilmes } = request.body;
  try {
    if (await Planet.findOne({ nome })) {
      return response
        .status(400)
        .send({ error: "Planeta já existe em nosso banco de dados" });
    } else if ( nome === null || clima === null || terreno === null || aparicoesFilmes === null) {
      return response
        .status(400)
        .send({ error: "Por favor preencha todos os dados de planeta" });
    } else {
      const planeta = await Planet.create(request.body);

      console.log("Planeta criado com sucesso!");

      return response.send({ planeta });
    }   
  } catch (err) {
    return response
      .status(500)
      .send({ error: "Houve um erro ao criar o planeta" });
  }
};

const listPlanets = async (request, response) => {
  try {
    const planetas = await Planet.find();

    response.send({ planetas });

    console.log("Planetas: ", planetas);
    console.log("Planetas listados com sucesso!");
  } catch (err) {
    return response
      .status(500)
      .send({ error: "Houve um erro ao listar planetas" });
  }
};

const findPlanetById = async (request, response) => {
  try {
    const planeta = await Planet.findById(request.params.id);
    response.send({ planeta });
    console.log("Planeta: ", planeta);
    console.log("Planeta listado com sucesso!");
  } catch (err) {
    return response
      .status(500)
      .send({ error: "Houve um erro ao listar o planeta" });
  }
};

const searchPlanet = async (request, response) => {
  const { searchQuery } = request.params;
  try {
    const planetas = await Planet.aggregate([{$match: {$text: {$search: searchQuery}}}]);
    response.send({ planetas });

    console.log("Planeta encontrado com sucesso!");
  } catch (err) {
      console.log(err);
    return response
      .status(500)
      .send({ error: "Houve um erro ao encontrar os planetas procurados" });
  }
};

const deletePlanet = async (request, response) => {
  try {
    await Planet.findByIdAndRemove(request.params.id);

    response.send(`Planeta de id: ${request.params.id} excluído com sucesso`);
  } catch (err) {
    return response
      .status(500)
      .send({ error: "Houve um erro ao deletar o planeta" });
  }
};

module.exports = {
  createPlanet,
  listPlanets,
  findPlanetById,
  searchPlanet,
  deletePlanet,
};
