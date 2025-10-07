import './contact.css';

const Contact = () => {
  return (
    <>
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Address</h2>
          <p>Mada Center 8th floor, 379 Hudson St,<br />New York, NY 10018 US</p>

          <h2>Let’s Talk</h2>
          <p className="highlight">+1 800 1236879</p>

          <h2>General Support</h2>
          <p className="highlight">contact@example.com</p>
        </div>

        <div className="contact-form">
          <h2>Send Us A Message</h2>
          <form>
            <div className="name-fields">
              <input type="text" placeholder="First name" required />
              <input type="text" placeholder="Last name" required />
            </div>
            <input type="email" placeholder="Eg. example@email.com" required />
            <input type="tel" placeholder="Eg. +250 789 123 456" />
            <textarea placeholder="Write us a message" required></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
    <div className='footer'>
      <p>Copyright &copy; 2025 Sport News. All rights reserved.</p>
    </div>
    </>
  );
};

export default Contact;
