// Builds a 16 index array, with numbers 0-15 and no repeats
const randomArray = () => {
    const initialArray = [];

    let randomIndex = Math.floor(Math.random() * (15 - 0 + 1) + 0);

      while (initialArray.length < 16) {
        while (initialArray.includes(randomIndex)) {
         randomIndex = Math.floor(Math.random() * (15 - 0 + 1) + 0); 
        };

        initialArray.push(randomIndex);
      }

      console.log(initialArray);
};

export default randomArray;