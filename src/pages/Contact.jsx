const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pt-20">
      {" "}
      {/* Added top padding */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border rounded"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
