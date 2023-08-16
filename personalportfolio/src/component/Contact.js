import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <div className="flex">
          <div className="w-1/2">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Send
              </button>
            </form>
          </div>
          <div className="w-1/2 pl-8">
            <h3 className="text-xl font-bold mb-2">Find Me Here</h3>
            <p className="text-gray-700 mb-2">
              Email: <a href="mailto:jahsper.harrell@gmail.com">jahsper.harrell@gmail.com</a>
            </p>
            <p className="text-gray-700 mb-2">
              Phone: <a href="tel:435-744-8718">435-744-8718</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
