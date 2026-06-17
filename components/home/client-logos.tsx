const clients = ['Microsoft', 'AWS', 'VMware', 'Dell', 'Cisco']

export function ClientLogos() {
  return (
    <section className="border-y border-border bg-secondary py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted technology partners
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clients.map((client) => (
            <span
              key={client}
              className="text-2xl font-bold tracking-tight text-primary/70 transition-colors hover:text-primary sm:text-3xl"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
