module.exports = {
  'link to \'Styled list numbers\' is on the homepage': function (test) {
    test.open('http://0.0.0.0:9000/')
      .assert.attr('#t-list-styled-numbers', 'href')
        .to.contain('/list-styled-numbers.html', 'Link to \'Styled list numbers\' page found')
      .done();
  },
  '\'Styled list numbers\' page displays component': function (test) {
    test.open('http://0.0.0.0:9000/list-styled-numbers.html')
      .assert.exists('.list-styled-numbers')
      .done();
  }
};