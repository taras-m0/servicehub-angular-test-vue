module.exports = function(app) {
  app.get('/api/list', function (req, resp) {
    const result = [ ];

    const offset = req.query.offset ? parseInt(req.query.offset) : 0

    for(let i = offset + 1; i < offset + 5; i++){
      result.push({
        id: i,
        title: 'Search result ' + i,
        date: '25.09.2020',
        bookmark: i % 2 == 0
      });
    }

    setTimeout(function () {
      resp.json(result);
    }, 5000);
  });

  app.get('/api/set_bookmark', function (req, resp) {
    resp.json('');
  });
}
