import { expect } from 'chai';
import CellState from '../CellState'
import Cell from '../Cell'

describe('Cell', () => {
    it('Should be initialized with a cellState', () => {
        const alive = new Cell(CellState.ALIVE);
        expect(alive.state).to.equal(CellState.ALIVE);
        const dead = new Cell(CellState.DEAD);
        expect(dead.state).to.equal(CellState.DEAD);
    })
    it('it should die if it has fewer than 2 neighbours', () => {
        const cell = new Cell(CellState.ALIVE);
        const nextStateWithZeroNeibs = cell.getNextState(0);
        expect(nextStateWithZeroNeibs).to.equal(CellState.DEAD)
        const nextStateWithOneNeibs = cell.getNextState(1);
        expect(nextStateWithOneNeibs).to.equal(CellState.DEAD)
    })
    it('it should live if it has 2 or 3 neighbours', () => {
        const cell = new Cell(CellState.ALIVE);
        const nextStateWithTwoNeibs = cell.getNextState(2);
        expect(nextStateWithTwoNeibs).to.equal(CellState.ALIVE)
        const nextStateWithThreeNeibs = cell.getNextState(3);
        expect(nextStateWithThreeNeibs).to.equal(CellState.ALIVE)

    })
    it('it should die if it has more than 3 neighbours', () => {
        const cell = new Cell(CellState.ALIVE);
        const nextStateWithFourNeibs = cell.getNextState(4);
        expect(nextStateWithFourNeibs).to.equal(CellState.DEAD)
        const nextStateWithFiveNeibs = cell.getNextState(5);
        expect(nextStateWithFiveNeibs).to.equal(CellState.DEAD)

    })
    it('Come alive with 3 neighbours', () => {
        const cell = new Cell(CellState.DEAD);
        const nextStateWithThreeNeibs = cell.getNextState(3);
        expect(nextStateWithThreeNeibs).to.equal(CellState.ALIVE);
    })
    it('it should stay dead if a dead cell only has fewer than 2 live neighbours', () => {
        const cell = new Cell(CellState.DEAD);
        const nextStateWithZeroNeibs = cell.getNextState(0);
        expect(nextStateWithZeroNeibs).to.equal(CellState.DEAD)
        const nextStateWithOneNeibs = cell.getNextState(1);
        expect(nextStateWithOneNeibs).to.equal(CellState.DEAD)
    })
    it('it should stay dead with more than 3 neighbours', () => {
        const cell = new Cell(CellState.DEAD);
        const nextStateWithZeroNeibs = cell.getNextState(4);
        expect(nextStateWithZeroNeibs).to.equal(CellState.DEAD)
        const nextStateWithOneNeibs = cell.getNextState(5);
        expect(nextStateWithOneNeibs).to.equal(CellState.DEAD)
    })

})