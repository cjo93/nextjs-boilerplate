import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";
import { siteCopy } from "@/lib/site-copy";

export default function HowItWorksPage() {
  return (
    <PageShell>
      <SectionShell>
        <h1 className="text-3xl font-semibold">
          {siteCopy.howItWorksPage.heroTitle}
        </h1>
        <p className="text-neutral-600 max-w-2xl">
          {siteCopy.howItWorksPage.heroBody}
        </p>
      </SectionShell>

      <SectionShell>
        <h2 className="text-2xl font-semibold">
          {siteCopy.howItWorksPage.introTitle}
        </h2>
        <p className="text-neutral-600 max-w-2xl">
          {siteCopy.howItWorksPage.introBody}
        </p>
      </SectionShell>

      <SectionShell>
        <div className="grid md:grid-cols-3 gap-6">
          {siteCopy.howItWorksPage.sections.map((section) => (
            <div key={section.title} className="space-y-2">
              <h3 className="font-medium">{section.title}</h3>
              <p className="text-sm text-neutral-500">{section.body}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <h2 className="text-2xl font-semibold">
          {siteCopy.howItWorksPage.principlesTitle}
        </h2>
        <ul className="space-y-2 text-neutral-600">
          {siteCopy.howItWorksPage.principles.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell className="text-center">
        <h2 className="text-2xl font-semibold">
          {siteCopy.howItWorksPage.closingTitle}
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          {siteCopy.howItWorksPage.closingBody}
        </p>
      </SectionShell>
    </PageShell>
  );
}
