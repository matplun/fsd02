const ContactUs = () => {
    return (
        <section className="doc_section text-bg-info p-3" id="contact_me">
            <h3>Submit the form below to contact me</h3>
            <br/>
            <form method="post">
                <label for="name">Name:</label><br/>
                <input type="text" id="name"/><br/>
                <label for="message">Message:</label><br/>
                <textarea id="message" rows="4"></textarea><br/>
                <input type="button" value="Submit"/>
            </form>
            <br/>
            <br/>
            <br/>
        </section>
    );
}

export default ContactUs;