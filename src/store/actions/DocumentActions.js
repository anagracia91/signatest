import { fetchDocuments } from '../../services/documentsAPI';
import { GET_DOCUMENTS, REMOVE_DOCUMENT, ADD_DOCUMENT } from '../types';
import { dispatch } from 'react';

export const removeDocument = id => {
	return {
		type: REMOVE_DOCUMENT,
		payload: id,
	};
};

export const addDocument = document => {
	return {
		type: ADD_DOCUMENT,
		payload: document,
	};
};

export const getDocuments = documents => {
	return {
		type: GET_DOCUMENTS,
		payload: { documents },
	};
};

export const getDocs = dispatch => {
	return async dispatch => {
		const documents = await fetchDocuments();

		dispatch(getDocuments(documents));
	};
};
