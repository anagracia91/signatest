import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { selectDocuments } from '../../store/reducers/DocumentReducer';
import { getDocs, removeDocument } from '../../store/actions/DocumentActions';
import './DocumentListing.css';

export default function DocumentListing() {
	const dispatch = useDispatch();

	const documents = useSelector(selectDocuments);

	const [filteredDocuments, setFilteredDocuments] = useState([]);

	useEffect(() => {
		if (documents === null) {
			dispatch(getDocs());
		}
	}, []);

	useEffect(() => {
		if (documents !== null) {
			setFilteredDocuments(documents);
		}
	}, [documents, filteredDocuments]);

	// Pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [documentsPerPage] = useState(2);
	const indexOfLastDocument = currentPage * documentsPerPage;
	const indexOfFirstDocument = indexOfLastDocument - documentsPerPage;
	const currentDocuments = filteredDocuments.slice(indexOfFirstDocument, indexOfLastDocument);
	const paginate = pageNumber => setCurrentPage(pageNumber);

	// Handlers
	const handleSelector = event => {
		const value = event.target.value;
		if (value === 'all') {
			return setFilteredDocuments(documents);
		}
		const newFilter = documents.filter(document => document.type === value);
		setFilteredDocuments(newFilter);
	};

	return (
		<div>
			<div className='list-header'>
				<h1>List of documents</h1>
				<select onChange={() => handleSelector(event)} name='filter-selector' className='filter-selector'>
					<option value='all'>All</option>
					<option value='simple'>Simple</option>
					<option value='advanced'>Advanced</option>
					<option value='custom'>Custom</option>
				</select>
			</div>
			{currentDocuments.length ? (
				<>
					{currentDocuments.map(document => (
						<div className='list-element' key={document.id}>
							<img src={document.img}></img>
							<div className='list-element-first-column'>
								<h2>{document.title}</h2>
								<h3>{{ simple: 'Simple', custom: 'Custom', advanced: 'Advanced' }[document.type]}</h3>
							</div>

							<button>
								<Link to={`/document/${document.id}`}>Details</Link>
							</button>
							<button onClick={() => dispatch(removeDocument(document.id))}>Delete</button>
						</div>
					))}
				</>
			) : (
				<h3>There are no documents</h3>
			)}
			{
				<Pagination
					documentsPerPage={documentsPerPage}
					totalDocuments={filteredDocuments.length}
					paginate={paginate}
					currentPage={currentPage}
				/>
			}
		</div>
	);
}
