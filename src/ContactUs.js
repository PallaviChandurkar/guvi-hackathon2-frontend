import React from 'react';

export default function Home() {
    return (
        <div className="contact py-3">
        <div className="container">
            <h1 className="text-center">Contact Us</h1>
            <div class="mb-3 ps-5 pe-5">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3 ps-5 pe-5">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="text-center">
                <button className="btn btn-primary">Submit</button>
                </div>
            </div>
            </div>
            )
}
