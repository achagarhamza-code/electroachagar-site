'use client';

import { useState } from 'react';

export function SAVForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (!(data.get('client') as string)?.trim() || !(data.get('telephone') as string)?.trim() || !(data.get('probleme') as string)?.trim()) {
      setStatus('error');
      setMessage('Veuillez renseigner au minimum le client, téléphone et problème.');
      return;
    }
    setStatus('loading');
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus('success');
    setMessage('Votre demande SAV a bien été reçue. Nous reviendrons vers vous.');
    form.reset();
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-grid two-col">
        <label>Client<input name="client" type="text" placeholder="Nom du client" required /></label>
        <label>Téléphone<input name="telephone" type="tel" placeholder="Téléphone" required /></label>
        <label>Produit<input name="produit" type="text" placeholder="Produit" /></label>
        <label>Marque<input name="marque" type="text" placeholder="Marque" /></label>
        <label>Modèle<input name="modele" type="text" placeholder="Modèle" /></label>
        <label>Numéro de série<input name="serie" type="text" placeholder="Si disponible" /></label>
      </div>
      <label>Facture<input name="facture" type="text" placeholder="Référence facture si disponible" /></label>
      <label>Problème<textarea name="probleme" rows={5} placeholder="Décrivez le problème" required /></label>
      <label>Photos<input name="photos" type="file" multiple /></label>
      {message ? <div className={`form-message ${status}`}>{message}</div> : null}
      <button type="submit" className="btn btn-primary">Envoyer ma demande</button>
    </form>
  );
}
