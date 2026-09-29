import { faqs } from '@/data/articles';

export default function FAQPage() {
  return (
    <>
      <section className="page-header">
        <div className="container narrow">
          <p className="eyebrow">ELECTROACHAGAR</p>
          <h1>FAQ</h1>
          <p>Réponses aux questions fréquentes.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid two-col">
            {faqs.map((faq) => (
              <div key={faq.question} className="product-card">
                <div className="product-card-body">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: 'FAQ',
  description: 'Questions fréquentes ELECTROACHAGAR.',
};
