module.exports = {
  'link to \'Styled list numbers\' is on the homepage': function (test) {
    test.open('http://0.0.0.0:9000/')
      .assert.attr('#t-styled-list-numbers', 'href')
        .to.contain('/styled-list-numbers.html', 'Link to \'Styled list numbers\' page found')
      .done();
  },
  '\'Styled list numbers\' page displays component': function (test) {
    test.open('http://0.0.0.0:9000/styled-list-numbers.html')
      .assert.exists('.styled-list-numbers')
      .done();
  }
};