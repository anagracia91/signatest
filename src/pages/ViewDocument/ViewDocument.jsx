import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeDocument, getDocuments } from '../../store/actions/DocumentActions';
import { selectDocuments } from '../../store/reducers/DocumentReducer';
import './ViewDocument.scss';

export default function ViewDocument() {
	const { id } = useParams();
	const documents = useSelector(selectDocuments);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [selected, setSelected] = useState({});

	const currentId = id;

	const removeFromView = id => {
		navigate('/');
		dispatch(removeDocument(id));
	};

	useEffect(() => {
		const id = currentId;

		const selected = documents.find(document => document.id === id);
		setSelected(selected);
	}, []);

	return (
		<div className='document-container'>
			<h1>{selected.title}</h1>
			<p>{selected.text}</p>
			<img src={selected.img}></img>
			<div className='document-footer-container'>
				<h3>{selected.date} 🗓️</h3>
				<button onClick={() => removeFromView(selected.id)}>Delete</button>
			</div>
		</div>
	);
}
