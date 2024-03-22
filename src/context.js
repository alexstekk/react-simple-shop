import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const getLocalOrder = () => {
	return localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')) : [];
};

const initialState = {
	goods: [],
	isLoading: true,
	order: getLocalOrder(),
	isBasketShow: false,
	alertName: '',
};

export const ContextProvider = ({ children }) => {
	const [value, dispatch] = useReducer(reducer, initialState);

	value.closeAlert = () => {
		dispatch({ type: 'CLOSE_ALERT' });
	};

	value.addToBasket = (item) => {
		dispatch({ type: 'ADD_TO_BASKET', payload: item });
	};

	value.removeFromBasket = (id) => {
		dispatch({ type: 'REMOVE_FROM_BASKET', payload: { mainId: id } });
	};

	value.handleBasketShow = () => {
		dispatch({ type: 'SET_IS_BASKET_SHOW' });
	};

	value.incQuantity = (id) => {
		dispatch({ type: 'INCREASE_QUANTITY', payload: { mainId: id } });
	};
	value.decQuantity = (id) => {
		dispatch({ type: 'DECREASE_QUANTITY', payload: { mainId: id } });
	};

	return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
