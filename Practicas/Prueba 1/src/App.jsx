import './App.css'

function App() {


  return (
    <>
      <div className="">
        <label htmlFor="formControlInput" className="form-label">Operando 1</label>
        <input type="email" className="form-control" id="op1" placeholder="name@example.com"></input>
        <label htmlFor="formControlInput" className="form-label">Operando 2</label>
        <input type="email" className="form-control" id="op2" placeholder="name@example.com"></input>
        <button type="button" className="btn btn-primary">+</button>
        <button type="button" className="btn btn-primary">-</button>
        <button type="button" className="btn btn-primary">*</button>
        <button type="button" className="btn btn-primary">/</button>
        <label htmlFor="formControlInput" className="form-label">Resultado</label>
        <input type="email" className="form-control" id="resultado" placeholder="name@example.com"></input>
      </div>
    </>
  )
}

export default App
