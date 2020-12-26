import { expect } from 'chai';
import Cell from '../Cell';
import Game from '../Game'
import { DEAD } from '../CellState'
const deadState = [
    [DEAD, DEAD, DEAD],
    [DEAD, DEAD, DEAD],
    [DEAD, DEAD, DEAD]
];
describe('Game', () => {
    it('should be initialized with a given state', () => {
        const game = new Game(deadState);
        const cellState = [
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)]
        ]
        expect(game.state).to.deep.equal(cellState)
    });
    it('it should retrieve a cell at a given row and column', () => {
        const game = new Game(deadState);
        const cell = game.getCell(0, 0);
        expect(cell.state).to.equal(deadState[0][0])
    })
})