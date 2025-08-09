'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');

    const res = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('✅ Mensaje enviado correctamente');
      setFormData({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: '',
      });
    } else {
      setStatus('❌ Error al enviar el mensaje');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-4 sm:p-6 bg-[#FFF9EF] shadow-md rounded-lg space-y-4"
    >
      {/* Nombre y Correo en dos columnas en pantallas medianas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border bg-[#F2D64B] text-[#6C4426] placeholder:text-[#6C4426] p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border bg-[#F2D64B] text-[#6C4426] placeholder:text-[#6C4426] p-2 rounded"
        />
      </div>

      {/* Asunto y Teléfono en dos columnas en pantallas medianas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="subject"
          placeholder="Asunto"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full border bg-[#F2D64B] text-[#6C4426] placeholder:text-[#6C4426] p-2 rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border bg-[#F2D64B] text-[#6C4426] placeholder:text-[#6C4426] p-2 rounded"
        />
      </div>

      <textarea
        name="message"
        placeholder="Mensaje"
        value={formData.message}
        onChange={handleChange}
        required
        rows={4}
        className="w-full border bg-[#F2D64B] text-[#6C4426] placeholder:text-[#6C4426] p-2 rounded"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-[#A7281B] text-[#FFF9EF] py-2 rounded hover:bg-[#FFF9EF] hover:text-[#A7281B] transition"
      >
        Enviar
      </button>

      {status && <p className="text-center text-sm">{status}</p>}
    </form>
  );
}
