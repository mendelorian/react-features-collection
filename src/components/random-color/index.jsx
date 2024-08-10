import { useState } from 'react';

export default function RandomColor() {

  const [colorType, setColorType] = useState('hex');
  const [color, setColor] = useState('#FFFFFF');

  const randomNumber = function generateRandomColorInteger(max) {
    return Math.floor(Math.random() * max);
  }

  function handleGenerateHexColor() {
    // generate random 6 digit ASCII
    const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexCode = '#';

    for (let i = 0; i < 6; i++) {
      hexCode += hex[randomNumber(hex.length)];
    }

    setColor(hexCode);
  }

  function handleGenerateRgbColor() {
    // generate 3 random 3 digit numbers
    const r = randomNumber(256);
    const g = randomNumber(256);
    const b = randomNumber(256);

    const rgbCode = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbCode);
  }


  return (
    <div style={{width: '100vw', height: '100vh', background: color}}>
      <h2>Select a color type:</h2>
      <button style={colorType === 'hex' ? {border: 'solid 3px', 'borderColor': 'red'} : {}} onClick={() => setColorType('hex')}>HEX Color</button>
      <button style={colorType === 'rgb' ? {border: 'solid 3px', 'borderColor': 'red'} : {}} onClick={() => setColorType('rgb')}>RGB Color</button>
      <br></br>
      <button onClick={() => colorType === 'hex' ? handleGenerateHexColor() : handleGenerateRgbColor()}>Generate Random Color</button>
      <div>
        <h2>{colorType.toUpperCase()}</h2>
        <h1>{color}</h1>
      </div>
    </div>
  )
}