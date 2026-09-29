'use client';

import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!(data.get('nom') as string)?.trim() || !(data.get('email') as string)?.trim() || !(data.get('message') as string)?.trim()) {
      setStatus('error');
      setMessage('Veuillez remplir les champs nom, email et message.');
      return;
    }

    setStatus('loading');
    setMessage('');
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus('success');
    setMessage('Votre message a bien été envoyé. Nous vous répondrons rapidement.');
    form.reset();
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-grid two-col">
        <label>
          Nom
          <input name="nom" type="text" placeholder="Nom" required />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" required />
        </label>
      </div>
      <label>
        Objet
        <input name="objet" type="text" placeholder="Objet" />
      </label>
      <label>
        Message
        <textarea name="message" rows={5} placeholder="Votre message" required />
      </label>
      {message ? <div className={`form-message ${status}`}>{message}</div> : null}
      <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
        {status === 'loading' ? 'Envoi...' : 'Envoyer'}
      </button>
    </form>
  );
}
