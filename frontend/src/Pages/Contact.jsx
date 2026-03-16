import { useState } from "react"

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch("http://localhost:8000/api/contact/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })

    alert("Message sent successfully")

    setForm({
      name: "",
      email: "",
      message: ""
    })
  }

  return (
    <div className="px-10 py-16 flex justify-center">

      <div className="w-[500px]">

        <h1 className="text-3xl font-bold mb-6 text-[#002b64]">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full border p-3 rounded h-32"
            required
          />

          <button
            type="submit"
            className="bg-[#002b64] text-white px-6 py-2 rounded"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  )
}

export default Contact