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

                <section className="user_text_input">
                    <div className="custom-margin-bottom-3 custom-comment">
                        <label htmlFor="input_story" className="custom-form-label">Business Description/ Story</label>
                        <textarea className="custom-form-control" id="input_story" rows="3"></textarea>
                    </div>
                    <div className="custom-margin-bottom-3 custom-pricing">
                        <label htmlFor="inputPricing" className="custom-form-label">Select Pricing:</label>
                        <select className="custom-form-select" id="input_pricing">
                            <option value="$">$</option>
                            <option value="$$">$$</option>
                            <option value="$$$">$$$</option>
                            <option value="$$$$">$$$$</option>
                        </select>
                    </div>
                    <div className="custom-margin-bottom-3">
                        <label htmlFor="inputAddress" className="custom-form-label">Address:</label>
                        <input type="text" className="custom-form-control" id="input_address" />
                    </div>
                    <div className="custom-margin-bottom-3">
                        <label htmlFor="inputTypeOfBusiness" className="custom-form-label">Type of Business:</label>
                        <input type="text" className="custom-form-control" id="input_type_of_business" />
                    </div>
                    <div className="custom-margin-bottom-3">
                        <label htmlFor="inputBusinessName" className="custom-form-label">Business Name:</label>
                        <input type="text" className="custom-form-control" id="input_business_name" />
                    </div>
                </section>

                <section>
                    <div className="custom-col-auto custom-submit-btn">
                        <a className="custom-btn custom-btn-custom" aria-current="next" href="index.html">Upload</a>
                    </div>
                </section>
            </div>
        </div>
    );
}

