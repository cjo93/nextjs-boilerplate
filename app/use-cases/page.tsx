import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";

export default function UseCasesPage() {
  const useCases = [
    {
      title: "Before you send the message",
      description: "Check if your timing and tone match the moment.",
      color: "blue"
    },
    {
      title: "When a conversation loops",
      description: "Understand the pattern that keeps you and another person stuck.",
      color: "purple"
    },
    {
      title: "When something feels 'off'",
      description: "Name the tension you&apos;re feeling so you can address it clearly.",
      color: "blue"
    },
    {
      title: "When you want to be heard",
      description: "Learn how to speak in a way the other person can actually receive.",
      color: "purple"
    },
    {
      title: "When you need to lead",
      description: "Move with self-possession and clarity in high-stakes environments.",
      color: "blue"
    }
  ];

  return (
    <PageShell>
      {/* HERO SECTION */}
      <SectionShell className="text-center py-20">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-glow animate-fade-in-up">
            For the moments that matter.
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            DEFRAG is for the times when you need to be sure.
          </p>
        </div>
      </SectionShell>

      {/* USE CASES GRID */}
      <SectionShell className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className={`glass p-8 rounded-xl hover:scale-105 transition-all duration-300 group animate-fade-in-up ${
                useCase.color === "blue" ? "hover:glow-blue" : "hover:glow-purple"
              }`}
              style={{ animationDelay: `${0.2 + index * 0.08}s` }}
            >
              <div className={`w-10 h-10 rounded-lg mb-4 ${
                useCase.color === "blue"
                  ? "bg-blue-600/20 group-hover:bg-blue-600/40"
                  : "bg-purple-600/20 group-hover:bg-purple-600/40"
              } transition-colors flex items-center justify-center`}>
                <span className={`text-sm font-bold ${
                  useCase.color === "blue" ? "text-blue-400" : "text-purple-400"
                }`}>
                  ✓
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {useCase.title}
              </h3>
              <p className="text-neutral-300">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* CLOSING SECTION */}
      <SectionShell className="text-center py-16">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Clarity when it matters most.
          </h2>
          <p className="text-lg text-neutral-300">
            Use DEFRAG whenever you need to move from confusion toward certainty.
          </p>
        </div>
      </SectionShell>
    </PageShell>
  );
}
