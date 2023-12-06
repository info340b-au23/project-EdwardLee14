import React, { useState } from 'react';
import { ref, set as firebaseSet } from 'firebase/database';
import { getDatabase } from 'firebase/database';

const Upload = (props) => {
    const [businessData, setBusinessData] = useState({
        favorite: false,
        rating: 0,
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setBusinessData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleUpload = (e) => {
        e.preventDefault();
        const db = getDatabase();
        const newBusinessRef = ref(db, 'businessList/' + businessData.business);

        const newBusiness = {
            ...businessData,
        };

        firebaseSet(newBusinessRef, newBusiness)
            .then(() => {
                console.log('Business data added successfully');
            })
            .catch((error) => {
                console.error('Error adding business data: ', error);
            });

        window.location.reload();
    };

    return (
        <div className="upload-container">
            <header className="submission_h1">
                <h1>Post Upload</h1>
            </header>
            <div className="upload-page">
                <form className="upload-page" onSubmit={handleUpload}>
                    <section className="user_image">
                        <div className="custom-margin-bottom-3 custom-image-insert">
                            <label htmlFor="image" className="custom-form-label">Insert Image Here: </label>
                            <input
                                className="custom-form-control custom-choose-file"
                                type="file"
                                id="image"
                                aria-label="Choose Image File"
                                onChange={handleInputChange}
                            />
                        </div>
                    </section>

                    <section className="user_text_input">
                        <div className="custom-margin-bottom-3 custom-comment">
                            <label htmlFor="article" className="custom-form-label">Business Description/ Story </label>
                            <textarea
                                className="custom-form-control"
                                id="article"
                                rows="3"
                                aria-label="Business Description or Story"
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                        <div className="custom-margin-bottom-3 custom-pricing">
                            <label htmlFor="inputPricing" className="custom-form-label">Select Pricing: </label>
                            <select
                                className="custom-form-select"
                                id="price"
                                aria-label="Select Pricing"
                                onChange={handleInputChange}
                            >
                                <option value="$">$</option>
                                <option value="$$">$$</option>
                                <option value="$$$">$$$</option>
                                <option value="$$$$">$$$$</option>
                            </select>
                        </div>
                        <div className="custom-margin-bottom-3">
                            <label htmlFor="address" className="custom-form-label">Address: </label>
                            <input
                                type="text"
                                className="custom-form-control"
                                id="address"
                                aria-label="Business Address"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="custom-margin-bottom-3">
                            <label htmlFor="inputAlt" className="custom-form-label">Alt caption for image: </label>
                            <input
                                type="text"
                                className="custom-form-control"
                                id="alt"
                                aria-label="alt caption for images"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="custom-margin-bottom-3">
                            <label htmlFor="inputBusinessName" className="custom-form-label">Business Name: </label>
                            <input
                                type="text"
                                className="custom-form-control"
                                id="business"
                                aria-label="Business Name"
                                onChange={handleInputChange}
                            />
                        </div>
                    </section>

                    <section>
                        <div className="custom-col-auto custom-submit-btn">
                            <button
                                className="custom-btn custom-btn-custom"
                                type="submit"
                                aria-label="Upload Button"
                            >
                                Upload
                            </button>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    );
}

export default Upload;
