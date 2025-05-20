import { Router } from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { UserRoutes } from '../modules/User/user.route';
import { projectRoutes } from '../modules/project/project.route';
import { BlogRoutes } from '../modules/Blog/blog.route';
import { MessageRoutes } from '../modules/message/message.route';
import { CommentRoutes } from '../modules/comment/comment.route';
import { DocumentRoutes } from '../modules/Document/document.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/projects',
    route: projectRoutes,
  },
  {
    path: '/blog',
    route: BlogRoutes,
  },
  {
    path: '/message',
    route: MessageRoutes,
  },
  {
    path: '/comment',
    route: CommentRoutes,
  },
  {
    path: '/text',
    route: DocumentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
