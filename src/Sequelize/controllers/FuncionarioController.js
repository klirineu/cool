const Funcionario = require('../models/Funcionario')

module.exports = {
  async index(req, res) {
    try {
      const funcionario = Funcionario.findAll()

      if(!funcionario) {
        return res.status(400).json({error: "Não existe funcionarios cadastrados"})
      }

      return res.json(funcionario)
    } catch(err) {
      return res.status(400).json(err)
    }
  },
  async store(req, res) {
    try {
      const { name, Filiacao, b_i, data_nascimento, provincia, grau_academico, endereco, funcao, telefone, email, image_url, arquivo_url} = req.body

      if (await Funcionario.findOne({ where: { b_i } }))
          return res.status(400).json({ error: "Funcionário já existe" });

      const funcionario = await Funcionario.create({ name, Filiacao, b_i, data_nascimento, provincia, grau_academico, endereco, funcao, telefone, email, image_url, arquivo_url})

      return res.json(funcionario)
    } catch(err) {
      return res.status(400).json(err)
    }
  },
  async update(req, res) {
   try {
      const { name, Filiacao, b_i, data_nascimento, provincia, grau_academico, endereco, funcao, telefone, email, image_url, arquivo_url } = req.body;

      const funcionario = await Funcionario.findOne({ where: { b_i } })

      if (!funcionario) {
        return res.status(400).json({ error: "Usuário não existe" });
      }

      await funcionario.update({ name, Filiacao, b_i, data_nascimento, provincia, grau_academico, endereco, funcao, telefone, email, image_url, arquivo_url  });

      return res.json(funcionario);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
  async delete(req, res) {
    const { b_i } = req.params

    const funcionario = await Funcionario.findOne({ where: {b_i}});

    if (!funcionario) {
      return res.status(400).json({ error: "Usuário não existe" });
    }

    await funcionario.destroy();

    return res.json({status: "ok"});
  }
}