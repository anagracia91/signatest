import { GET_DOCUMENTS, REMOVE_DOCUMENT, ADD_DOCUMENT } from '../types';

export const INITIAL_STATE = {
	documents: null,
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case REMOVE_DOCUMENT:
			return {
				...state,

				documents: state.documents.filter(document => {
					return document.id !== action.payload;
				}),
			};

		case GET_DOCUMENTS:
			const { documents } = action.payload;

			return { ...state, documents };

		case ADD_DOCUMENT:
			return {
				...state,
				documents: [action.payload, ...state.documents],
			};

		default:
			return state;
	}
}

export const selectDocuments = state => state.documents.documents || null;
