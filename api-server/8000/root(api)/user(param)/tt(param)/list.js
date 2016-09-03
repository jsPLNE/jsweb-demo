module.exports = function (req, res) {
    res.end(req.path + '<br>' + JSON.stringify(req.params));
}
