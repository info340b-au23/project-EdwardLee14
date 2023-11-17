import React from 'react';

export function Upload(props) {
    return (
        <div>
            <header>
                <ul className="navbar">
                    <li className="nav-item"><a href="login.html">Login</a></li>
                    <li className="nav-item"><a href="favorites.html">Favorites</a></li>
                    <li className="nav-item"><a href="submission.html">Upload</a></li>
                    <li className="nav-item"><a href="articles.html">Articles</a></li>
                    <li className="nav-item"><a href="index.html">Home</a></li>
                </ul>
            </header>
            <header className="submission_h1">
                <h1>Post Upload</h1>
            </header>
            <div className="upload-page">
                <section className="user_image">
                    <div className="custom-margin-bottom-3 custom-image-insert">
                        <label htmlFor="formFile" className="custom-form-label">Insert Image Here: </label>
                        <p></p>
                        <input className="custom-form-control custom-choose-file" type="file" id="formFile" />
                    </div>
                </section>
            </div>
        </div>
    );
}