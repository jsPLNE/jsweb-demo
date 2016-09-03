module.exports = function (req, res) {
    res.end(req.path + '\n' + JSON.stringify(req.params));

}
