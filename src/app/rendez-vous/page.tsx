import { AppointmentForm } from '@/components/AppointmentForm';

export default function RendezVousPage() {
  return (
    <>
      <section className="page-header">
        <div className="container narrow">
          <p className="eyebrow">ELECTROACHAGAR</p>
          <h1>Prise de rendez-vous</h1>
          <p>Demande de consultation, étude vidéosurveillance, étude réseau, SAV ou maintenance.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <AppointmentForm />
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: 'Rendez-vous',
  description: 'Demande de rendez-vous ELECTROACHAGAR.',
};
