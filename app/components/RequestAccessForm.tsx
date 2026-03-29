"use client"

import { useState } from "react"

export default function RequestAccessForm() {
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    await fetch("/api/request-access", {
      method: "POST",
      body: formData,
    })

    setSuccess(true)
  }

  if (success) {
    return <p>Request submitted successfully.</p>
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" required />
      <button type="submit">Submit</button>
    </form>
  )
}
