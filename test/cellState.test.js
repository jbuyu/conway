import {expect} from 'chai'
import CellState from '../CellState.js'
describe('CellState', ()=>  {
    it(('It should have alive state'), ()=> {
        expect(CellState.Alive).to.equal(1);
    })
    it('it should have dead state', ()=>{
        expect(CellState.Dead).to.equal(0)
    })
    
})