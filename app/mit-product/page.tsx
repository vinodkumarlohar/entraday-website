export default function MitProductPage() {
  return (
    <main>
      <PageHero
        eyebrow="MIT Product"
        title="MIT — The Managed IT Platform"
        description="One platform to monitor, automate, secure, and report across your entire IT estate."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                A single pane of glass
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                See everything. Control everything.
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Entraday MIT brings your fragmented tools together into one
                intelligent platform. Reduce mean time to resolution, automate
                the routine, and give leadership the visibility they need.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {[
                  'Reduce incident resolution time by up to 60%',
                  'Automate repetitive operational tasks',
                  'Stay audit-ready with continuous compliance',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="size-4" />
                    </span>
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                render={<Link href="/contact" />}
                nativeButton={false}
                size="lg"
                className="mt-8 h-11 bg-accent px-5 text-accent-foreground hover:bg-accent/90"
              >
                Request a demo
                <ArrowRight className="size-4" />
              </Button>
            </div>
              
            {/* Sahi dynamic container with absolute positioning context */}
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg aspect-[4/3] w-full min-h-[400px]">
              <Image
                src="/images/mit-product.webp"
                alt="Entraday MIT platform dashboard"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="Everything your IT operations need"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => {
              const Icon = c.icon
              return (
                <div
                  key={c.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pricing"
            title="Plans that scale with you"
            description="Transparent, tailored pricing. Talk to us for a quote based on your estate."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={
                  plan.featured
                    ? 'relative flex flex-col rounded-2xl border-2 border-accent bg-card p-8 shadow-lg'
                    : 'relative flex flex-col rounded-2xl border border-border bg-card p-8'
                }
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-2 text-3xl font-bold text-primary">{plan.price}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  render={<Link href="/contact" />}
                  nativeButton={false}
                  className={
                    plan.featured
                      ? 'mt-8 h-11 bg-accent text-accent-foreground hover:bg-accent/90'
                      : 'mt-8 h-11'
                  }
                  variant={plan.featured ? 'default' : 'outline'}
                >
                  Get started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="See MIT in action"
        description="Book a personalized demo and discover how MIT transforms your IT operations."
      />
    </main>
  )
}
