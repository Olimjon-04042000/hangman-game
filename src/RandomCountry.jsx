import data from "./data";

const RandomCountry = () => {
  let randomNumber=Math.trunc(Math.random()*31);
  const country=data[randomNumber].name;
  return (
    <div className='container'>
     {country}
    </div>
  )
}

export default RandomCountry