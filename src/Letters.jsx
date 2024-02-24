

const Letters = () => {

  const lettersArr=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  return (
    <div className="container letters">
      {lettersArr.map((letter)=>(
     <button key={letter} className="letter">{letter}</button>
      ))}
    </div>
  )
}

export default Letters