import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const ops = ['/', '*', '+', '-', '.', '%'];

  const updateNumber = (value: string) => {
    if (
      (ops.includes(value) && number === '' && value !== '-') ||
      (ops.includes(value) && value !== '.' && ops.includes(number.slice(-1)))
    ) {
      return;
    }
    if (number === '0' && !ops.includes(value)) setNumber(value);
    else if (number.slice(-1) === '0' && ops.includes(number.slice(-2, -1))) {
      if (value === '0') setNumber(number + value);
      else setNumber(number.slice(0, -1) + value);
    } else {
      if (value === '%') setNumber(number + '/100');
      else setNumber(number + value);
    }
    if (!ops.includes(value)) {
      if (number === '0') setResult(eval(value).toString());
      else if (number.slice(-1) === '0' && ops.includes(number.slice(-2, -1)))
        if (value === '0') setResult(eval(number + value).toString());
        else setResult(eval(number.slice(0, -1) + value).toString());
      else {
        setResult(eval(number + value).toString());
      }
    }
    if (value === '%') setResult(eval(number + '/100').toString());
  };

  const calculate = () => {
    setNumber(eval(number).toString());
  };

  const deleteLast = () => {
    if (number === '') {
      return;
    }
    const value = number.slice(0, -1);
    setNumber(value);
    if (!ops.includes(number.slice(-2, -1))) setResult(eval(value));
  };

  const setAC = () => {
    const value = '';
    setNumber(value);
    setResult(value);
  };
  return (
    
    <div className="bg-green-500 w-screen h-screen flex justify-center items-center">
      <div className="w-64 h-auto bg-white rounded-2xl shadow-2xl border-8 border-gray-100">
        <div className="w-auto m-3 h-28 text-right space-y-2 py-2">
          <div className="text-gray-700">{number ? number : '0'}</div>
          <div className="text-black font-bold text-3xl">
            {result ? result : '0'}=
          </div>
        </div>
        <div className="w-auto m-1 h-auto mb-2">
          <div className="m-2 flex justify-between">
            <button onClick={setAC} className="btn-yellow">
              AC
            </button>
            <button onClick={deleteLast} className="btn-grey">
              C
            </button>
            <button onClick={() => updateNumber('%')} className="btn-grey">
              %
            </button>
            <button onClick={() => updateNumber('/')} className="btn-orange">
              /
            </button>
          </div>
          <div className="m-2 flex justify-between">
            <button onClick={() => updateNumber('7')} className="btn-grey">
              7
            </button>
            <button onClick={() => updateNumber('8')} className="btn-grey">
              8
            </button>
            <button onClick={() => updateNumber('9')} className="btn-grey">
              9
            </button>
            <button onClick={() => updateNumber('*')} className="btn-orange">
              *
            </button>
          </div>
          <div className="m-2 flex justify-between">
            <button onClick={() => updateNumber('4')} className="btn-grey">
              4
            </button>
            <button onClick={() => updateNumber('5')} className="btn-grey">
              5
            </button>
            <button onClick={() => updateNumber('6')} className="btn-grey">
              6
            </button>
            <button onClick={() => updateNumber('-')} className="btn-orange">
              -
            </button>
          </div>
          <div className="m-2 flex justify-between">
            <button onClick={() => updateNumber('1')} className="btn-grey">
              1
            </button>
            <button onClick={() => updateNumber('2')} className="btn-grey">
              2
            </button>
            <button onClick={() => updateNumber('3')} className="btn-grey">
              3
            </button>
            <button onClick={() => updateNumber('+')} className="btn-orange">
              +
            </button>
          </div>
          <div className="m-2 flex justify-between">
            <button
              onClick={() => updateNumber('0')}
              className="btn-grey-jumbo"
            >
              0
            </button>
            <div className="flex w-full ml-3 justify-between">
              <button onClick={() => updateNumber('.')} className="btn-grey">
                .
              </button>
              <button onClick={calculate} className="btn-green">
                =
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="w-20 h-1 bg-gray-100 rounded-l-xl rounded-r-xl"></div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;