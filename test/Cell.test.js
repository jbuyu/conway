import {expect} from 'chai';
import CellState from '../CellState'
import Cell from '../Cell'

describe('Cell', ()=>{
    it('Should be initialized with a cellState', ()=>{
        const alive = new Cell(CellState.ALIVE);
        expect(alive.state).to.equal(CellState.ALIVE);
        const dead = new Cell(CellState.DEAD);
        expect(dead.state).to.equal(CellState.DEAD);
    })
    it('it should dies if it has fewer than 2 neighbours', ()=>{
        const cell = new Cell(CellState.ALIVE);
        const nextState = cell.getNextState(1);
        expect(nextState).to.equal(CellState.DEAD)
    })
})