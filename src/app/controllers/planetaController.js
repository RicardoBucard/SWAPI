const Planeta = require("../models/Planeta");

const criaPlaneta = async (request, response) => {
  const { nome } = request.body;
  try {
    if (await Planeta.findOne({ nome })) {
      return response
        .status(400)
        .send({ error: "Planeta já existe em nosso banco de dados" });
    } else {
      const novoPlaneta = await Planeta.create(request.body);

      console.log("Planeta criado com sucesso!");

      return response.send({ novoPlaneta });
    }   
  } catch (err) {
    return response
      .status(500)
      .send({ error: "Houve um erro ao criar o planeta" });
  }
};

const listaPlanetas = async (request, response) => {
  try {
    const planetas = await Planeta.find();

    response.send({ planetas });

    console.log("Planetas listados com sucesso!");
  } catch (err) {
    return response
      .status(500)
      .send({ error: "Houve um erro ao listar planetas" });
  }
};

const encontraPlanetaPorId = async (request, response) => {
  try {
    const planetaBuscado = await Planeta.findById(request.params.id);
    response.send({ planetaBuscado });
    console.log("Planeta listado com sucesso!");
  } catch (err) {
    return response
      .status(500)
      .send({ error: "Houve um erro ao listar o planeta" });
  }
};

const procuraPlaneta = async (request, response) => {
  const { searchQuery } = request.params;
  try {
    const planetaBuscado = await Planeta.aggregate([{$match: {$text: {$search: searchQuery}}}]);
    response.send({ planetaBuscado });

    console.log("Planeta encontrado com sucesso!");
  } catch (err) {
      console.log(err);
    return response
      .status(500)
      .send({ error: "Houve um erro ao encontrar os planetas procurados" });
  }
};

const deletaPlaneta = async (request, response) => {
  try {
    await Planeta.findByIdAndRemove(request.params.id);

    response.send(`Planeta de id: ${request.params.id} excluído com sucesso`);
  } catch (err) {
    return response
      .status(500)
      .send({ error: "Houve um erro ao deletar o planeta" });
  }
};

module.exports = {
  criaPlaneta,
  listaPlanetas,
  encontraPlanetaPorId,
  procuraPlaneta,
  deletaPlaneta,
};
