import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostsList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/getposts')
            .then(res => setPosts(res.data));
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3001/deletepost/${id}`);
        setPosts(posts.filter(post => post.id !== id));
    };

    return (
        <div className="container mt-5">
            <h2>Posts List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>
                                <Link to={`/edit/${post.id}`} className="btn btn-warning btn-sm mr-3">Edit</Link>
                                <button onClick={() => handleDelete(post.id)} className="btn btn-danger btn-sm" style={{marginLeft:"6px"}}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PostsList;