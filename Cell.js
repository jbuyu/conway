import CellState from "./CellState";

export default class Cell {
    constructor(state) {
        this.state = state;
    }

    getNextState(neighbours) {
        if (this.state === CellState.ALIVE) {
            if (neighbours === 2 | neighbours === 3) {
                return this.state;
            }
        } else if (neighbours === 3) {
            return CellState.ALIVE;
        }
        return CellState.DEAD;
    }
}