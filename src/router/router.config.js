import { lazy } from "react";

const AdminBlogPage = lazy(() => import("../pages/admin/BlogsPage"));
const AdminAddBlogPage = lazy(() => import("../pages/admin/AddBlogPage"));
const AdminEditBlogPage = lazy(() => import("../pages/admin/EditBlogPage"));
const NotFound = lazy(() => import("../pages/NotFound")) ;

const ClientBlogPage = lazy(() => import("../pages/client/BlogPage"));
const ClientBlogDetailPage = lazy(() => import("../pages/client/BlogDetailPage"));


export default [
    {
        title: "",
        component: ClientBlogPage,
        path: '/',
        isProtected: false
    },
    {
        title: "",
        component: ClientBlogDetailPage,
        path: '/blog-detail',
        isProtected: false
    },
    {
        title: "",
        component: AdminBlogPage,
        path: '/admin/blog',
        isProtected: true
    },
    {
        title: "",
        component: AdminAddBlogPage,
        path: '/admin/blog/add',
        isProtected: true
    },
    {
        title: "",
        component: AdminEditBlogPage,
        path: '/admin/blog/edit',
        isProtected: true
    },
    {
        title: "404 | Sample App",
        component: NotFound,
        path: '/*',
        isProtected: false
    }
];