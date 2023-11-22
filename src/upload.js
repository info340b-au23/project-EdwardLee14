import React from 'react';

const Upload = (props) => {
    return (
        <div>
            <header className="submission_h1">
                <h1>Post Upload</h1>
            </header>
            <div className="upload-page">
                <section className="user_image">
                    <div className="custom-margin-bottom-3 custom-image-insert">
                        <label htmlFor="formFile" className="custom-form-label">Insert Image Here: </label>
                        <p></p>
                        <input
                            className="custom-form-control custom-choose-file"
                            type="file"
                            id="formFile"
                            aria-label="Choose Image File"
                        />
                    </div>
                </section>

                <section className="user_text_input">
                    <div className="custom-margin-bottom-3 custom-comment">
                        <label htmlFor="input_story" className="custom-form-label">Business Description/ Story </label>
                        <textarea
                            className="custom-form-control"
                            id="input_story"
                            rows="3"
                            aria-label="Business Description or Story"
                        ></textarea>
                    </div>
                    <div className="custom-margin-bottom-3 custom-pricing">
                        <label htmlFor="inputPricing" className="custom-form-label">Select Pricing: </label>
                        <select
                            className="custom-form-select"
                            id="input_pricing"
                            aria-label="Select Pricing"
                        >
                            <option value="$">$</option>
                            <option value="$$">$$</option>
                            <option value="$$$">$$$</option>
                            <option value="$$$$">$$$$</option>
                        </select>
                    </div>
                    <div className="custom-margin-bottom-3">
                        <label htmlFor="inputAddress" className="custom-form-label">Address: </label>
                        <input
                            type="text"
                            className="custom-form-control"
                            id="input_address"
                            aria-label="Business Address"
                        />
                    </div>
                    <div className="custom-margin-bottom-3">
                        <label htmlFor="inputTypeOfBusiness" className="custom-form-label">Type of Business: </label>
                        <input
                            type="text"
                            className="custom-form-control"
                            id="input_type_of_business"
                            aria-label="Type of Business"
                        />
                    </div>
                    <div className="custom-margin-bottom-3">
                        <label htmlFor="inputBusinessName" className="custom-form-label">Business Name: </label>
                        <input
                            type="text"
                            className="custom-form-control"
                            id="input_business_name"
                            aria-label="Business Name"
                        />
                    </div>
                </section>

                <section>
                    <div className="custom-col-auto custom-submit-btn">
                        <a
                            className="custom-btn custom-btn-custom"
                            aria-current="next"
                            href="index.html"
                            aria-label="Upload Button"
                        >
                            Upload
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Upload;
