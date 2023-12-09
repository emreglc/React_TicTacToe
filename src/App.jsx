import Board from "./components/Board";
import Moves from "./components/Moves";

function App() {


    return (
        <div className="App">
            <h1>WELCOME TO TIC-TAC-TOE</h1>
            <div className="container">
                <Board />
                <Moves />
            </div>
        </div>
    );
}

export default App;
