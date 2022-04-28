import './Pagination.scss';

const Pagination = ({ documentsPerPage, totalDocuments, paginate, currentPage }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalDocuments / documentsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className='pagination'>
				{pageNumbers.map(number => (
					<li key={number} className={currentPage === number ? 'page-item current' : 'page-item'}>
						<span onClick={() => paginate(number)} className='page-link'>
							{number}
						</span>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
