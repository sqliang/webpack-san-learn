import Home from './views/Home.san';
import About from './views/About.san';

const routes = [
    {
        rule: '/',
        Component: Home
    },
    {
        rule: '/home',
        Component: Home
    },
    {
        rule: '/about',
        Component: About
    }
];

routes.forEach(item => item.target = '#content');
export default routes;
