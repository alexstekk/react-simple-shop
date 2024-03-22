export function reducer(state, { type, payload }) {
	switch (type) {
		case 'SET_GOODS':
			return {
				...state,
				goods: payload || [],
				isLoading: false,
			};
		case 'CLOSE_ALERT':
			return {
				...state,
				alertName: '',
			};
		case 'ADD_TO_BASKET': {
			const existInOrderItemIndex = state.order.findIndex((orderItem) => payload.mainId === orderItem.mainId);

			let updatedOrder = null;

			if (existInOrderItemIndex < 0) {
				updatedOrder = [...state.order, { ...payload, quantity: 1 }];
			} else {
				updatedOrder = state.order.map((orderItem, index) => {
					if (existInOrderItemIndex === index) {
						return { ...orderItem, quantity: orderItem.quantity + 1 };
					} else {
						return orderItem;
					}
				});
			}
			return {
				...state,
				order: updatedOrder,
				alertName: payload.displayName,
			};
		}
		case 'REMOVE_FROM_BASKET':
			return {
				...state,
				order: state.order.filter((item) => item.mainId !== payload.mainId),
			};

		case 'SET_IS_BASKET_SHOW':
			return {
				...state,
				isBasketShow: !state.isBasketShow,
			};
		case 'INCREASE_QUANTITY':
			return {
				...state,
				order: state.order.map((item) => {
					if (item.mainId === payload.mainId) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				}),
			};
		case 'DECREASE_QUANTITY':
			return {
				...state,
				order: state.order.reduce((arr, item) => {
					if (item.mainId === payload.mainId) {
						item = { ...item, quantity: item.quantity - 1 };
					}
					if (item.quantity) {
						arr = [...arr, item];
					}
					return arr;
				}, []),
			};

		default:
			return { ...state };
	}
}
