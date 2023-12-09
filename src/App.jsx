import Board from "./components/Board";
import Moves from "./components/Moves";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Board />
                <div className="status"></div>
                <Moves />
            </div>
        </div>
    );
}

export default App;
