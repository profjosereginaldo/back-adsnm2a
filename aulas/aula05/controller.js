const produtos = [];

function listarTodos(req, res) {
    res.json(produtos);
}

module.exports = { listarTodos }