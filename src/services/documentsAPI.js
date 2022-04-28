import data from '../data.json';

export const fetchDocuments = async () => {
	let documents = [];

	try {
		const response = await data;

		if (response) {
			documents = response;
		}
	} catch (error) {
		throw new Error(error);
	}

	return documents;
};
