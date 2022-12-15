const InstituicoesModel = require("../models/instituicoesModels");
const SECRET = process.env.SECRET;
//const jwt = require("jsonwebtoken");

const findAllInstituicoes = async (req, res) => {
  const instituicoes = await InstituicoesModel.find();
  res.status(200).json(instituicoes);
};

const registerNewInstituicao = async (req, res) => {
  try {
 /*   const authHeader = req.get("authorization");

    if (!authHeader) {
      return res.status(401).send("You need an authorization");
    }

    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET, async function (error) {
      if (error) {
        return res.status(403).send("Access denied");
      }
    });
*/
    const { nome, contato, endereco, regiao, atuacao } = req.body;

    const newInstituicao = new InstituicoesModel({
      nome,
      contato,
      endereco,
      regiao,
      atuacao,
    });

    const savedInstituicao = await newInstituicao.save();

    res.status(201).json(savedInstituicao);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
const deleteInstituicao = async (req, res) => {
  const { id } = req.params;
  await InstituicoesModel.findByIdAndDelete(id);
  const message = `Instituição com o id: ${id} removido com sucesso.`;
  res.status(200).json({ message });
};
const updateinstituicoes = async (req, res) => {
  try {
    const authHeader = req.get("authorization");

    if (!authHeader) {
      return res.status(401).send("You need an authorization");
    }

    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (error) {
      if (error) {
        return res.status(403).send("Access denied");
      }

      const { nome, contato, endereco, regiao, atuacao } = req.body;
      const updateinstituicoes = await InstituicoesModel.findByIdAndUpdate(
        req.params.id,
        {
          nome,
          contato,
          local,
          regiao,
        }
      );
      res.status(200).json(updateinstituicoes);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json([message, error.message]);
  }
};
module.exports = {
  findAllInstituicoes,
  registerNewInstituicao,
  deleteInstituicao,
  updateinstituicoes,
};
