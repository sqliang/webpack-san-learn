import App from './App.san';

import routes from './routes';
import {Router} from 'san-router';

import './index.css';

const app = new App();
const router = new Router();

app.attach(document.getElementById('root'));
routes.forEach(route => {
    router.add(route);
});
router.start();

// hmr 更新逻辑
if (module.hot) {
    module.hot.data = {app, router};
    module.hot.accept(['./routes', './App.san'], () => {
        // 销毁旧的app
        module.hot.data.app.dispose();
        module.hot.data.router.stop();
        
        module.hot.data.router.routeAlives.forEach(item => {
            item.component.dispose();
        });
        module.hot.data.router = null;

        // 创建新的app和router
        const app = new App();
        const router = new Router();
        app.attach(document.getElementById('root'));
        routes.forEach(route => {
            router.add(route);
        });
        router.start();

        //
        module.hot.data = {app, router};
    });
}