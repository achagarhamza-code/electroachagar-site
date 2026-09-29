export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="page-header">
      <div className="container narrow">
        <p className="eyebrow">ELECTROACHAGAR</p>
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
    </section>
  );
}
