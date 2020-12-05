const { decode, Error } = require('neon-js');
const { readdirSync, readFileSync, writeFileSync } = require('fs');

// convert neon i18n files to json
let content;
let encoded;
const all_languages = {};
readdirSync(`${__dirname}/src/i18n`).forEach((file) => {
  if (file.endsWith('.neon')) {
    try {
      console.log(`Parsing i18n file: ${file}`);
      content = readFileSync(`${__dirname}/src/i18n/${file}`);
      parsed = decode(content.toString()).toObject(true);
      all_languages[file.substr(0, 5)] = { translation: parsed };
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
      throw e;
      process.exit(1);
    }
  }
});
writeFileSync(
  `${__dirname}/src/i18n/strings.json`,
  JSON.stringify(all_languages)
);
