import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/addpost', { title, body })
            .then(res => {
                console.log(res.data);
                navigate('/posts');
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            {/* <h3>Create a New Post</h3> */}
                            <h3>Add Delivery Address</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="title">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        placeholder="Enter Email"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div><br/>
                                <div className="form-group">
                                    <label htmlFor="body">Address</label>
                                    <textarea
                                        className="form-control"
                                        id="body"
                                        rows="5"
                                        placeholder="Enter Address"
                                        value={body}
                                        onChange={(e) => setBody(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-success mt-3">Deliver This Address</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;