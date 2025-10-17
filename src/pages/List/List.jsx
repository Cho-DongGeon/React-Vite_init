import { Link } from 'react-router-dom';
import { useAlert } from '../../contexts/AlertContext';
import { useConfirm } from '../../contexts/ConfirmContext';

function List() {
    const { showAlert } = useAlert();
    const { showConfirm } = useConfirm();
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];
    const testFunc = async () => {
        await showAlert('테스트임', callbackFunc);
        console.log('확인버튼을 눌러야 실행되는 콘솔');
    };

    const testFunc2 = async () => {
        const ok = await showConfirm('진행하시겠습니까?');
        console.log('결과: ', ok);

        if (!ok) {
            console.log('취소됨');
            return;
        }

        console.log('확인됨 - 작업을 계속 진행합니다');
        showAlert('작업이 진행되었습니다!');
    };

    const callbackFunc = () => {
        console.log('callbackFunc');
        showAlert('이건 콜백임');
    };
    return (
        <div style={{ padding: '2rem' }}>
            <h1>List Page</h1>
            <button onClick={testFunc}>alert테스트를 위한 버튼</button>
            <button onClick={testFunc2}>confirm테스트를 위한 버튼</button>
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
