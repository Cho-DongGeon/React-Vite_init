import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleGoToList = () => {
        navigate('/list');
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Home Page</h1>
            <p>React Router DOM v7 Test!</p>
            <p>createBrowserRouter방식 사용함</p>
            <button
                onClick={handleGoToList}
                style={{
                    marginTop: '1rem',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#1976d2',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }}>
                List 페이지로 이동
            </button>
        </div>
    );
}

export default Home;
