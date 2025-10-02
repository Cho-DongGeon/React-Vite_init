import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import List from './pages/List/List';
import ListDetail from './pages/ListDetail/ListDetail';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'list',
                element: <List />,
            },
            {
                path: 'list-detail/:id',
                element: <ListDetail />,
            },
        ],
    },
]);
