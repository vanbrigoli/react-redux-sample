import _ from 'lodash';
import { ADD_ITEM } from '../actions/TodoActions';

const vendItemList = (state = [
    {id: 5, itemName: 'Sinigang Na Keasimsim', price: 120, description:`Rovelle's Sinigang, will make you go tigang with its sour taste and distinct flavor.`, image:'https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/77d08f50-3ccc-4432-a86d-4dcfdd3d7cd4.jpg'},
    {id: 4, itemName: 'Adobong Kesarapsarap', price: 70, description:`Better than any adobo in world, Rovelle's adobo will surely make you go loko!`, image:'https://a8g4i9g5y.ssl.hwcdn.net/files/styles/food_image/public/image/7b/94/107805-filipino-pork-adobo.png'},
    {id: 3, itemName: 'Bicol Express To Heaven', price: 80, description:`The hottest place in town will be in side your mouth once you try Rovelle's Bicol Express!`, image: 'https://www.kawalingpinoy.com/wp-content/uploads/2014/03/bicolexpress2a.jpg'},
    {id: 2, itemName: `Spring Rock'n'Roll`, price: 50, description:'Rolls in your mouth, Rocks on your tounge! You will never have enough of it!', image: 'http://assets.epicurious.com/photos/57978acfe4857f9f1047d065/master/pass/crispy-spring-rolls.jpg'},
    {id: 1, itemName: 'Li Chun Kawalee', price: 100, description:`You will definitely know Chinese once you try this! Rovelle's Lechon Kawali will let you speak your heart out!`, image: 'https://i1.wp.com/i304.photobucket.com/albums/nn200/twstdd/052-7.jpg'},
], action) => {
    switch(action.type){
        case ADD_ITEM:
            let item = action.payload;
            let lastItem = state[0];
            item.id = lastItem ? lastItem.id + 1 : 1;
            state.unshift(item);
            return [...state];
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