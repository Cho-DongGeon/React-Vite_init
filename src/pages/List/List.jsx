import { Link } from 'react-router-dom';

function List() {
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];

    return (
        <div style={{ padding: '2rem' }}>
            <h1>List Page</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id} style={{ marginBottom: '1rem' }}>
                        <Link to={`/list-detail/${item.id}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;
