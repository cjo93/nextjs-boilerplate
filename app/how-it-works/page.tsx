import { PageShell } from "@/components/system/page-shell";
import { SectionShell } from "@/components/system/section-shell";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "1",
      title: "Map Your Nature",
      description: "We use your birth details to find your natural starting point. No long quizzes or personality labels—just a clear look at how you were uniquely made to experience the world.",
      color: "blue"
    },
    {
      number: "2",
      title: "Pick Your Lens",
      description: "Choose the focus that matches your need. Whether you are looking inward, reading a specific moment, or trying to understand a relationship, move into the part of the system that fits.",
      color: "purple"
    },
    {
      number: "3",
      title: "Find the Way Forward",
      description: "DEFRAG gives you a simple, human explanation of the 'why' and a clear path forward that feels right for everyone involved.",
      color: "blue"
    }
  ];

  return (
    <PageShell>
      {/* HERO SECTION */}
      <SectionShell className="text-center py-20">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-glow animate-fade-in-up">
            From confusion to clarity.
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            DEFRAG takes the complexity of human interaction and turns it into simple, honest guidance you can use immediately.
          </p>
        </div>
      </SectionShell>

      {/* VERTICAL STEPPER */}
      <SectionShell className="space-y-12 relative">
        {/* Vertical connecting line background */}
        <div className="absolute left-[50%] md:left-[25%] top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-30 hidden md:block" />

        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`flex gap-8 items-start md:gap-12 animate-fade-in-up ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          >
            {/* Step indicator */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl ${
                  step.color === "blue"
                    ? "bg-blue-600 text-white glow-blue animate-glow-pulse"
                    : "bg-purple-600 text-white glow-purple animate-glow-pulse"
                }`}
              >
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="w-1 h-20 bg-gradient-to-b from-gray-500 to-transparent mt-4 opacity-50" />
              )}
            </div>

            {/* Step content */}
            <div
              className={`glass p-8 rounded-xl hover:scale-105 transition-all duration-300 flex-1 ${
                step.color === "blue" ? "hover:glow-blue" : "hover:glow-purple"
              }`}
            >
              <h3 className={`text-2xl font-bold mb-4 ${
                step.color === "blue" ? "text-blue-400" : "text-purple-400"
              }`}>
                {step.title}
              </h3>
              <p className="text-neutral-300 text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </SectionShell>

      {/* CLOSING SECTION */}
      <SectionShell className="text-center py-16">
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            A calmer way to work with what is happening.
          </h2>
          <p className="text-lg text-neutral-300">
            Whether you need self-understanding, timing support, or relationship clarity, DEFRAG is designed to help you move with more precision and less confusion.
          </p>
        </div>
      </SectionShell>
    </PageShell>
  );
}
