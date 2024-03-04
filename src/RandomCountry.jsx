import data from "./data";

const RandomCountry = () => {
  let randomNumber = Math.trunc(Math.random() * 31);
  const country = data[randomNumber].name;
  const countryLetters = country.split("");
  return (
    <div className="container">
      <div className="letter-box">
        {countryLetters.map((countryLetter, index) => (
          <div key={index} className="counrty-letter">
            {countryLetter}
          </div>
        ))} 
      </div>
    </div>
  );
};

export default RandomCountry;
