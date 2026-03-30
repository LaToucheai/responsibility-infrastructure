"use client"

import { useState } from "react"

export default function RequestAccessForm() {
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    await fetch("/api/request-access", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        organisation: formData.get("organisation"),
      }),
    })

    setSuccess(true)
  }

  if (success) {
    return <p>Request submitted successfully.</p>
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="organisation" placeholder="Organisation" required />
      <button type="submit">Submit</button>
    </form>
  )
}
