import { useState } from "react";
import Nav from "./Nav";

function Contact() {
  const [formData, setFormData] = useState({
    subject: "general",
    email: "",
    budget: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    console.log({ name, value });

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formData);
  }

  return (
    <section className="container">
      <Nav />
      <main>
        <section className="contact-form-section">
          <h2>Contact Ngoako</h2>

          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="subject">Subject</label>

              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="general">General</option>
                <option value="freelance">Freelance opportunity</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {formData.subject === "freelance" && (
              <div className="form-field freelance-field">
                <label>Budget</label>

                <div className="form-budget-options">
                  {[
                    "R5000 - R10000",
                    "R10000 - R20000",
                    "R20000 - R30000",
                    "R30000+",
                  ].map((budget) => (
                    <div key={budget}>
                      <input
                        type="radio"
                        id={budget}
                        name="budget"
                        value={budget}
                        checked={formData.budget === budget}
                        onChange={handleChange}
                      />
                      <label htmlFor={budget}>{budget}</label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="form-field">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <button type="submit">Send message</button>
            </div>
          </form>
        </section>
      </main>
    </section>
  );
}

export default Contact;
