import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
  {
  description = '', 
  notes = '', 
  amount = 0, 
  createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expenses: {
    id: uuid(),
    description,
    notes,
    amount,
    createdAt
  }
});
//REMOVE_EXPENSE
  const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
  });

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
//SET_TEXT_FILTER
const setTextFilter = (text) => ({
  type: 'SET_TEXT_FILTER',
  text
})
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//expensese reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expenses];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      })
    default:
      return state;
  }
};

//filter reducer
const filtersReducerDefaultState = {
  text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTER': 
      return {
        ...state,
        text: action.text
      }
    default: 
      return state
  }
}

//store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer

  })
);

store.subscribe(() => {
  console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 300}));
console.log(expenseOne)

store.dispatch(removeExpense({id: expenseOne.expenses.id}));
store.dispatch(editExpense(expenseTwo.expenses.id, {amount: 500}));
store.dispatch(setTextFilter('rent'));


