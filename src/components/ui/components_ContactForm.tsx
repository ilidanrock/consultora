'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario, por ejemplo:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formState)
    // })
    // if (response.ok) {
    //   // Manejar éxito
    // } else {
    //   // Manejar error
    // }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input 
        placeholder="Nombre" 
        value={formState.name}
        onChange={(e) => setFormState({...formState, name: e.target.value})}
      />
      <Input 
        placeholder="Email" 
        type="email"
        value={formState.email}
        onChange={(e) => setFormState({...formState, email: e.target.value})}
      />
      <Textarea 
        placeholder="Mensaje"
        value={formState.message}
        onChange={(e) => setFormState({...formState, message: e.target.value})}
      />
      <Button className="w-full" type="submit">Enviar mensaje</Button>
    </form>
  )
}