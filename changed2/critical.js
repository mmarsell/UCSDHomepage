const critical = require('critical');
critical.generate({
    base: './',
    src: 'index.html',
    dest: 'index.html',
    inline: true,
    width: 1300,
    height: 900
},(err, output) => {
    if (err) {
      console.error(err);
    } else if (output) {
      console.log('Generated critical CSS');
    }
  });