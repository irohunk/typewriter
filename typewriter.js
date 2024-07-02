
const sentenceTimeout = (str) => {
  words = str.split("");
  words.forEach((word, index) => {
    setTimeout(() => {
      process.stdout.write(word);
      if (index === words.length -1) {
        console.log("\n")
      }
    }, (index + 1) * 50);
  });
};

const sentence = "hello there from lighthouse labs";
sentenceTimeout(sentence);