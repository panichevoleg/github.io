import { createStore } from 'redux';

const initialState = {
  films: 
    [{
      name: 'Film 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rating: 5,
      image: ''
    },
    {
      name: 'Film 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rating: 2,
      image: ''
    },
    {
      name: 'Film 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rating: 4,
      image: ''
    }],
    selectedId: null
};

function movies(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_FILM':
      return { ...state, selectedId: action.id };
      
    case 'UPDATE_FILM':
    const { data: {name, description, rating, image}, id } = action.data;
    const { films } = state;
      return { ...state, films: [
        ...films.slice(0, id),
        {
          name,
          description,
          rating,
          image
        },
        ...films.slice(id+1)
      ]};
    
    default:
      return state;
  }
}

export const selectFilm = id => (
  {
    type: 'SELECT_FILM',
    id
  }
)

export const updateFilm = (id, data) => (
  {
    type: 'UPDATE_FILM',
    data: {id, data}
  }
)

export default createStore(
  movies,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
