import { useNavigate } from 'react-router-dom';
import { useAlert } from '../../contexts/AlertContext';

function Home() {
    const { showAlert } = useAlert();
    const navigate = useNavigate();

    const handleGoToList = () => {
        navigate('/list');
    };

    const test = () => {
        showAlert('test alert!!!', () => {
            console.log('Alert 확인 버튼이 클릭되었습니다!');
        });
        console.log('Alert가 표시됨!');
    };

    const testWithCallback = async () => {
        await showAlert('콜백 함수가 있는 Alert!', () => {
            alert('콜백 함수가 실행되었습니다!');
        });
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
            <button
                onClick={test}
                style={{
                    marginLeft: '1rem',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#4caf50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }}>
                기본 Alert 테스트
            </button>
            <button
                onClick={testWithCallback}
                style={{
                    marginLeft: '1rem',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#ff9800',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }}>
                콜백 Alert 테스트
            </button>
        </div>
    );
}

export default Home;
