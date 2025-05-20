"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = require("../modules/Auth/auth.route");
const user_route_1 = require("../modules/User/user.route");
const project_route_1 = require("../modules/project/project.route");
const blog_route_1 = require("../modules/Blog/blog.route");
const message_route_1 = require("../modules/message/message.route");
const comment_route_1 = require("../modules/comment/comment.route");
const document_route_1 = require("../modules/Document/document.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/projects',
        route: project_route_1.projectRoutes,
    },
    {
        path: '/blog',
        route: blog_route_1.BlogRoutes,
    },
    {
        path: '/message',
        route: message_route_1.MessageRoutes,
    },
    {
        path: '/comment',
        route: comment_route_1.CommentRoutes,
    },
    {
        path: '/text',
        route: document_route_1.DocumentRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
