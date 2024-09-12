import { createRouter } from 'uni-mini-router';
import pagesJson from '@/pages.json';
import pagesJsonToRoutes from 'uni-parse-pages';

const routes = pagesJsonToRoutes(pagesJson);

const router = createRouter({
  routes: [...routes]
});

// 全局前置守卫
router.beforeEach((_to, _from, next) => {
  next(true);
});


export default router
