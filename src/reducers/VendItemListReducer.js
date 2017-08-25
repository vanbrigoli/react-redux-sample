import _ from 'lodash';
import { ADD_ITEM } from '../actions/TodoActions';

const vendItemList = (state = [
    {id: 1, itemName: 'Sinigang Na Keasimsim', price: 120, description:`Rovelle's Sinigang, will make you go tigang with its sour taste and distinct flavor.`, image:'https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/77d08f50-3ccc-4432-a86d-4dcfdd3d7cd4.jpg'},
    {id: 2, itemName: 'Adobong Kesarapsarap', price: 70, description:`Better than any adobo in world, Rovelle's adobo will surely make you go loko!`, image:'https://a8g4i9g5y.ssl.hwcdn.net/files/styles/food_image/public/image/7b/94/107805-filipino-pork-adobo.png'},
    {id: 3, itemName: 'Bicol Express', price: 80, description:'Hot', image: null},
    {id: 4, itemName: 'Spring Rolls', price: 50, description:'Rolls in your mouth', image: null},
    {id: 5, itemName: 'Lechon Kawali', price: 100, description:'Crispylicious!', image:null},
    {id: 6, itemName: 'Lechon Kawali', price: 100, description:'Crispylicious!', image:null},
    {id: 7, itemName: 'Bicol Express', price: 80, description:'Hot', image: null},
    {id: 8, itemName: 'Spring Rolls', price: 50, description:'Rolls in your mouth', image: null},
    {id: 9, itemName: 'Lechon Kawali', price: 100, description:'Crispylicious!', image:null},
    {id: 10, itemName: 'Lechon Kawali', price: 100, description:'Crispylicious!', image:null}
], action) => {
    switch(action.type){
      case ADD_ITEM:
            let item = action.payload;
            let lastItem = state[state.length - 1];
            item.id = lastItem ? lastItem.id + 1 : 1;
            return [...state, action.payload];
      case 'SORT_MENU': {
            return _.sortBy(state, [action.sortType])
        }
        case 'REMOVE_VENDOR_ITEM': {
            return state.filter((item) => {
                return item.id !== action.id;
            });
        }
        default: return state
    }
};

export default vendItemList;