
module.exports = function server(express) {
  express.get('/greeting', (req, res) => {
    res.send('Hello Word!');
  });
};