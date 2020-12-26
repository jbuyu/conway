import {expect} from 'chai'
import CellState from '../CellState.js'
describe('CellState', ()=>  {
    it(('It should have alive state'), ()=> {
        expect(CellState.ALIVE).to.equal(1);
    })
    it('it should have dead state', ()=>{
        expect(CellState.DEAD).to.equal(0)
    })
    
})