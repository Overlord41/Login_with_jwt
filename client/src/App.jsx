import "./App.css";

function App() {
  const submitLogin = (e) => {
    e.preventDefault();
    console.log("Hola Mundo");
  };

  return (
    <div>
      <form onSubmit={submitLogin}>
        <label>Correo: </label>
        <input type="text" value="correo" />
        <br />
        <label>Contraseña: </label>
        <input type="password" value="password" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
