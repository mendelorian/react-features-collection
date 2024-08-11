import data from './data';
import { useState } from 'react';
import './styles.css';

export default function Accordian() {

  const [selected, setSelected] = useState(null);
  const [multiSelectEnabled, setMultiSelectEnabled] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  function handleSingleSelection(id) {
    console.log(id);
    setSelected(id === selected ? null : id);
  }

  function handleMultiSelection(id) {
    let copyMulti = [...multiSelected];
    const idxOfId = multiSelected.indexOf(id);
    if (idxOfId === -1) {
      copyMulti.push(id);
    } else {
      copyMulti.splice(idxOfId, 1);
    }

    setMultiSelected(copyMulti);
    console.log(copyMulti, multiSelected);
  }

  return (
    <div className="wrapper">

      <button
      style={{backgroundColor: multiSelectEnabled ? '#45d86c' : '#f9f9f9'}}
      onClick={() => setMultiSelectEnabled(!multiSelectEnabled)}>
        {multiSelectEnabled ? 'Multi Selection ON' : 'Enable Multi Selection'}
      </button>

      <div className="accordian">
        {
          data && data.length > 0 ?
          data.map((item) =>
            <div key={item.id} className="item">
              <div
                onClick={multiSelectEnabled ? () => handleMultiSelection(item.id) : () => handleSingleSelection(item.id)}
                className="title">
                  <h3>{item.question}</h3>
                  <span>+</span>
              </div>
              {multiSelectEnabled ? multiSelected.indexOf(item.id) !== -1 && <div className="answer">{item.answer}</div> :
              selected === item.id && <div className="answer">{item.answer}</div>}
            </div>)
          : <div>No data found!</div>
        }
      </div>
    </div>
  )
}