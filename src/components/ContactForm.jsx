import { useEffect, useState } from "react";

function ContactForm() {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {

            setIsOpen(true);

        }, 5000);

        return () => clearTimeout(timer);

    }, []);

    if (!isOpen) return null;

    return (

        <div className="modal">

            <div className="modal-content">

                <button onClick={() => setIsOpen(false)}>
                    Close
                </button>

                <h2>Contact Me</h2>

                <form
                    action="https://formspree.io/f/xqejelbz"
                    method="POST"
                >

                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Message"
                        required
                    ></textarea>

                    <button type="submit">
                        Send
                    </button>

                </form>

            </div>

        </div>
    );
}

export default ContactForm;