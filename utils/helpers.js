//will change this to whatever we need just using this to make sure all thr routes are set up
module.exports = {
    // Helper function returns a randomly generated book emoji
    get_emoji: () => {
      const randomNum = Math.random();
      let book = "📗";
  
      if (randomNum > 0.7) {
        book = "📘";
      } else if (randomNum > 0.4) {
        book = "📙";
      }
  
      return `<span for="img" aria-label="book">${book}</span>`;
    },
  };
  