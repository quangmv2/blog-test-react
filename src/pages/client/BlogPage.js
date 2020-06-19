import React from 'react';
import { Link } from "react-router-dom";

const BlogPage = () => {
    return (
        <div>
            <p>List Blog Client</p>
            <Link to="/admin/blog">admin</Link>
        </div>
    )
}
export default BlogPage;