import React, { useRef, useState } from "react";
import "../App.css";
import emailjs from "@emailjs/browser";
import validator from 'validator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validator.isEmail(form.email) && form.name !== "" && form.message !== "") {
            setLoading(true);
            emailjs
                .send(
                    'service_5x3dojl',
                    'template_pkvca0q',
                    {
                        from_name: form.name,
                        to_name: "Muhammad Ali",
                        from_email: form.email,
                        to_email: "muhammadali30804@gmail.com",
                        message: form.message,
                    },
                    'jxQMbrb2uddjW2J3f'
                )
                .then(
                    () => {
                        setLoading(false);
                        alert("Sent successfully. I will get back to you as soon as possible.");

                        setForm({
                            name: "",
                            email: "",
                            message: "",
                        });
                    },
                    (error) => {
                        setLoading(false);
                        console.error(error);

                        alert("Something went wrong.");
                    }
                );
        }
        else if (!validator.isEmail(form.email) && form.name === "" && form.message === "") {
            alert("Kindly don't send empty message");
        }
        else if (form.name === "") {
            alert("Please enter name!");
        }
        else if (form.message === "") { alert("Please enter a message!"); }
        else if (!validator.isEmail(form.email)) {
            alert("Please enter a valid email!");
        }

    };
    return (
        <section id="contact">
            <p className="section__text__p1">Get in Touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <form className='form' ref={formRef} onSubmit={handleSubmit}>
                    <label style={{ display: "block" }}>
                        <p >Your Name</p>
                        <input
                            type='text'
                            name='name'
                            placeholder="What's your name?"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </label >
                    <label style={{ display: "block" }}>
                        <p >Your email</p>
                        <input
                            value={form.email}
                            onChange={handleChange}
                            type='email'
                            name='email'
                            placeholder="What's your email address?"
                        />
                    </label>
                    <label style={{ display: "block" }}>
                        <p >Your Message</p>
                        <textarea
                            rows={20}
                            value={form.message}
                            onChange={handleChange}
                            name='message'
                            placeholder='Enter your message, please'
                        />
                    </label>
                    <button
                        type='submit'
                        className="btn btn-color-1 send"
                    >{loading ? "Sending..." : "Send"}  &nbsp;
                     <FontAwesomeIcon icon={faEnvelope} size="20px" />
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
