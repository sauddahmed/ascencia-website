import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact-page container">
      <section className="contact-info">
        <h1>Contact Ascencia Malta</h1>
        <p>
          For any questions about programs or admissions, contact us below or fill the form. :contentReference[oaicite:8]{index=8}
        </p>

        <p><strong>Address:</strong> 23 Vincenzo Dimech St, Floriana, Malta. :contentReference[oaicite:9]{index=9}</p>
        <p><strong>Email:</strong> info@ascencia.mt</p>
        <p><strong>Phone:</strong> +356 2034 1784 :contentReference[oaicite:10]{index=10}</p>
      </section>

      <section className="contact-form">
        <h2>Send us a message</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;