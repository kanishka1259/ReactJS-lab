import { useState } from "react";

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [op, setOp] = useState("+");
  const [ans, setAns] = useState("");
  const [msg, setMsg] = useState("");
  const [score, setScore] = useState(0);

  const checkAnswer = () => {
    let correct;

    switch (op) {
      case "+": correct = a + b; break;
      case "-": correct = a - b; break;
      case "*": correct = a * b; break;
      case "/":
        if (b === 0) {
          setMsg("❌ Cannot divide by zero");
          return;
        }
        correct = (a / b).toFixed(2);
        break;
    }

    if (Number(ans) == correct) {
      setMsg("🎉 Correct!");
      setScore(score + 1);
    } else {
      setMsg("❌ Try Again!");
    }
  };

  return (
    <div className="card">
      <h2>Kids Calculator Game</h2>

      <input type="number" placeholder="Number 1" onChange={e => setA(+e.target.value)} />

      <select onChange={e => setOp(e.target.value)}>
        <option value="+">+</option>
        <option value="-">−</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>

      <input type="number" placeholder="Number 2" onChange={e => setB(+e.target.value)} />

      <input type="number" placeholder="Your Answer" onChange={e => setAns(e.target.value)} />

      <button onClick={checkAnswer}>Check Answer</button>

      <p className="result">{msg}</p>
      <p className="score">Score ⭐ {score}</p>
    </div>
  );
}

export default App;
