import { useParams, Link } from 'react-router-dom';

function ListDetail() {
    const { id } = useParams();

    return (
        <div style={{ padding: '2rem' }}>
            <h1>List Detail Page</h1>
            <p>Detail for item ID: {id}</p>
            <Link to="/list" style={{ color: '#1976d2' }}>
                ← Back to List
            </Link>
        </div>
    );
}

export default ListDetail;
