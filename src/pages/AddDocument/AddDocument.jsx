import { Link, useNavigate } from 'react-router-dom';
import { addDocument } from '../../store/actions/DocumentActions';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './AddDocument.css';

export default function AddDocument() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [date, setDate] = useState('');
	const [img, setImg] = useState('');

	const buttonHandler = event => {
		event.preventDefault();

		if (date && title) {
			const newDocument = {
				id: uuidv4(),
				title,
				text,
				date,
				img,
				type: !img && !text ? 'simple' : !img ? 'custom' : 'advanced',
			};

			dispatch(addDocument(newDocument));
			navigate('/');
		}
	};

	const onChangeTitle = event => {
		setTitle(event.target.value);
	};

	const onChangeText = event => {
		setText(event.target.value);
	};

	const onChangeDate = event => {
		setDate(event.target.value);
	};

	const onChangeImg = event => {
		setImg(event.target.value);
	};

	return (
		<div>
			<div className='add-form'>
				<label>Add a new document</label>
				<input
					className={title === '' ? 'error' : ''}
					type='text'
					name='title'
					onChange={onChangeTitle}
					value={title}
					placeholder='Enter title'></input>
				<input type='text' name='text' onChange={onChangeText} value={text} placeholder='Enter text'></input>
				<input type='text' name='img' value={img} placeholder='Enter image url' onChange={onChangeImg} />

				<input
					className={date === '' ? 'error' : ''}
					type='date'
					onChange={onChangeDate}
					value={date}
					required
					name='date'
					min='2018-01-01'
					max='2025-12-31'></input>
				<div className='button-container'>
					<button onClick={buttonHandler}>Submit</button>
					<button>
						<Link to='/'>Cancel</Link>
					</button>
				</div>
			</div>
		</div>
	);
}
