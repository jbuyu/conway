import Cell from "./Cell";
// import CellState from "./CellState";

export default class Game {
    constructor(state) {
        this.state = state.map(row => row.map(cellState => new Cell(cellState)));
    }
    getCell(row, col) {
        return new Cell

    }
}