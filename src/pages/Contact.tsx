function Contact() {

  return (

    <div className="max-w-lg mx-auto bg-white shadow p-8 my-10">

      <h1 className="text-3xl font-bold mb-5">
        Contact Us
      </h1>

      <input
        className="border p-3 w-full mb-3"
        placeholder="Your Name"
      />

      <input
        className="border p-3 w-full mb-3"
        placeholder="Email"
      />

      <textarea
        className="border p-3 w-full mb-3"
        placeholder="Message"
      />

      <button
        className="bg-blue-700 text-white w-full p-3 rounded"
      >
        Send Message
      </button>

    </div>

  );

}

export default Contact;