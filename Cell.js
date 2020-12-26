import CellState from "./CellState";

export default class Cell {
    constructor(state){
        this.state = state;
    }
    getNextState(neighbours){
       if(neighbours === 2 | neighbours === 3){
            return CellState.ALIVE;
        } else if (neighbours > 4){
            return CellState.DEAD;
        }
        return CellState.DEAD;
    }
}