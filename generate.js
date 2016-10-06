var fs = require('fs');

function replace(original, replacement){
  return (string) => new Promise(resolve =>
    resolve(string.replace(new RegExp(original, 'g'), replacement))
  );
}

function generate(info){
  return new Promise(resolve => {
    fs.readFile(info.poster_path || './poster.svg', (err, poster) => {
      if (err) throw err;
      poster = poster.toString();
      replace("{{TITLE}}", info.title)(poster)
        .then(replace("{{DESCRIPTION}}",info.description))
        .then(replace("{{LOCATION}}",info.location))
        .then(replace("{{TIME}}",info.time))
        .then(replace("{{EVENT_DATE}}",info.event_date))
        .then(replace("{{TAKEDOWN}}",info.takedown))
        .then(string => {
          fs.writeFile("./result.svg", string, () => {
            console.log("Poster generated successfully \"result.svg\"");
            resolve();
          });
        });
    });
  });
}


module.exports.generate = generate;
