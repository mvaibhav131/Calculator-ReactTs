import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const ops = ["/", "*", "+", "-", ".", "%"];

  const updateNumber = (value: string) => {
    if (
      (ops.includes(value) && number === "" && value !== "-") ||
      (ops.includes(value) && value !== "." && ops.includes(number.slice(-1)))
    ) {
      return;
    }
    if (number === "0" && !ops.includes(value)) setNumber(value);
    else if (number.slice(-1) === "0" && ops.includes(number.slice(-2, -1))) {
      if (value === "0") setNumber(number + value);
      else setNumber(number.slice(0, -1) + value);
    } else {
      if (value === "%") setNumber(number + "/100");
      else setNumber(number + value);
    }
    if (!ops.includes(value)) {
      if (number === "0") setResult(eval(value).toString());
      else if (number.slice(-1) === "0" && ops.includes(number.slice(-2, -1)))
        if (value === "0") setResult(eval(number + value).toString());
        else setResult(eval(number.slice(0, -1) + value).toString());
      else {
        setResult(eval(number + value).toString());
      }
    }
    if (value === "%") setResult(eval(number + "/100").toString());
  };
  const calculate = () => {
    setNumber(eval(number).toString());
  };
  const deleteLast = () => {
    if (number === "") {
      return;
    }
    const value = number.slice(0, -1);
    setNumber(value);
    if (!ops.includes(number.slice(-2, -1))) setResult(eval(value));
  };
  const setAC = () => {
    const value = "";
    setNumber(value);
    setResult(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-zinc-900 to-slate-800 flex flex-col justify-between items-center p-4 sm:p-8">
      {/* Calculator wrapper */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="w-full max-w-[300px] sm:max-w-[340px]">
          {/* Header */}
          <p className="text-center text-zinc-600 text-xs font-medium tracking-[0.25em] uppercase mb-5">
            Calculator
          </p>

          {/* Calculator Body */}
          <div className="bg-black rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden border border-zinc-800">
            {/* Display */}
            <div className="px-5 pt-8 pb-5 text-right">
              <div className="text-zinc-500 text-sm h-5 overflow-hidden text-ellipsis whitespace-nowrap">
                {number || "\u00A0"}
              </div>
              <div className="text-white font-light text-5xl sm:text-6xl mt-2 overflow-hidden text-ellipsis whitespace-nowrap leading-tight">
                {result !== "" ? result : "0"}
              </div>
            </div>

            {/* Button Grid */}
            <div className="px-4 pb-6 grid grid-cols-4 gap-3">
              {/* Row 1 */}
              <button onClick={setAC} className="btn-special">
                AC
              </button>
              <button onClick={deleteLast} className="btn-special">
                C
              </button>
              <button onClick={() => updateNumber("%")} className="btn-special">
                %
              </button>
              <button
                onClick={() => updateNumber("/")}
                className="btn-operator"
              >
                ÷
              </button>

              {/* Row 2 */}
              <button onClick={() => updateNumber("7")} className="btn-number">
                7
              </button>
              <button onClick={() => updateNumber("8")} className="btn-number">
                8
              </button>
              <button onClick={() => updateNumber("9")} className="btn-number">
                9
              </button>
              <button
                onClick={() => updateNumber("*")}
                className="btn-operator"
              >
                ×
              </button>

              {/* Row 3 */}
              <button onClick={() => updateNumber("4")} className="btn-number">
                4
              </button>
              <button onClick={() => updateNumber("5")} className="btn-number">
                5
              </button>
              <button onClick={() => updateNumber("6")} className="btn-number">
                6
              </button>
              <button
                onClick={() => updateNumber("-")}
                className="btn-operator"
              >
                −
              </button>

              {/* Row 4 */}
              <button onClick={() => updateNumber("1")} className="btn-number">
                1
              </button>
              <button onClick={() => updateNumber("2")} className="btn-number">
                2
              </button>
              <button onClick={() => updateNumber("3")} className="btn-number">
                3
              </button>
              <button
                onClick={() => updateNumber("+")}
                className="btn-operator"
              >
                +
              </button>

              {/* Row 5 */}
              <button
                onClick={() => updateNumber("0")}
                className="btn-number-wide col-span-2"
              >
                0
              </button>
              <button onClick={() => updateNumber(".")} className="btn-number">
                .
              </button>
              <button onClick={calculate} className="btn-operator">
                =
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 pb-2 text-center">
        <div className="flex justify-center items-center gap-5 mb-3">
          <a
            href="https://twitter.com/mvaibhav131"
            className="text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            href="https://vaibhav-more-portfolio-site.netlify.app/"
            className="text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/vaibhavmore1997/"
            className="text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav131/"
            className="text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a
            href="https://github.com/mvaibhav131"
            className="text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
        <p className="text-zinc-700 text-xs mt-1">
            © {new Date().getFullYear()}{" "}
          <a
            href="https://vaibhav-more-portfolio-site.netlify.app/"
            className="hover:text-zinc-500 transition-colors"
          >
            Vaibhav More
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
