'use client';

import { useState } from 'react';

export function AppointmentForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (!(data.get('nom') as string)?.trim() || !(data.get('telephone') as string)?.trim()) {
      setStatus('error');
      setMessage('Veuillez remplir les champs nom et téléphone.');
      return;
    }
    setStatus('loading');
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus('success');
    setMessage('Demande reçue — nous vous confirmerons le rendez-vous.');
    form.reset();
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-grid two-col">
        <label>Nom<input name="nom" type="text" placeholder="Nom" required /></label>
        <label>Téléphone<input name="telephone" type="tel" placeholder="Téléphone" required /></label>
        <label>Service<select name="service" defaultValue="">
          <option value="" disabled>Choisir un service</option>
          <option>Consultation électroménager</option>
          <option>Étude vidéosurveillance</option>
          <option>Étude réseau</option>
          <option>SAV</option>
          <option>Maintenance</option>
        </select></label>
        <label>Date souhaitée<input name="date" type="date" /></label>
        <label>Heure souhaitée<input name="heure" type="time" /></label>
      </div>
      <label>Message<textarea name="message" rows={5} placeholder="Précisez votre besoin" /></label>
      {message ? <div className={`form-message ${status}`}>{message}</div> : null}
      <button type="submit" className="btn btn-primary">Envoyer la demande</button>
    </form>
  );
}
