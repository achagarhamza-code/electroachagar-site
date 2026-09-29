'use client';

import { useState } from 'react';

export function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const required = ['nom', 'prenom', 'telephone', 'email', 'ville', 'typeProjet'];
    const missing = required.some((key) => !(data.get(key) as string)?.trim());

    if (missing) {
      setStatus('error');
      setMessage('Veuillez remplir les champs obligatoires.');
      return;
    }

    setStatus('loading');
    setMessage('');

    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus('success');
    setMessage('Votre demande a bien été reçue. Notre équipe vous recontactera prochainement.');
    form.reset();
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-grid two-col">
        <label>
          Nom
          <input name="nom" type="text" placeholder="Votre nom" />
        </label>
        <label>
          Prénom
          <input name="prenom" type="text" placeholder="Votre prénom" />
        </label>
        <label>
          Entreprise
          <input name="entreprise" type="text" placeholder="Entreprise (facultatif)" />
        </label>
        <label>
          Téléphone
          <input name="telephone" type="tel" placeholder="Téléphone" required />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" required />
        </label>
        <label>
          Ville
          <input name="ville" type="text" placeholder="Ville" required />
        </label>
        <label>
          Type de projet
          <select name="typeProjet" defaultValue="" required>
            <option value="" disabled>Choisir</option>
            <option>Électroménager</option>
            <option>Vidéosurveillance</option>
            <option>Réseaux</option>
            <option>Installation</option>
            <option>Maintenance</option>
            <option>SAV</option>
            <option>Autre</option>
          </select>
        </label>
        <label>
          Produit / service
          <input name="produit" type="text" placeholder="Produit ou service souhaité" />
        </label>
        <label>
          Quantité
          <input name="quantite" type="text" placeholder="Quantité" />
        </label>
        <label>
          Budget indicatif
          <input name="budget" type="text" placeholder="Facultatif" />
        </label>
        <label>
          Date souhaitée
          <input name="date" type="date" />
        </label>
      </div>
      <label>
        Message
        <textarea name="message" rows={5} placeholder="Décrivez votre besoin ou votre projet" />
      </label>
      <label>
        Pièce jointe facultative
        <input name="pieceJointe" type="file" />
      </label>
      {message ? <div className={`form-message ${status}`}>{message}</div> : null}
      <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
        {status === 'loading' ? 'Envoi...' : 'Envoyer ma demande'}
      </button>
    </form>
  );
}
