import { ReactNode } from "react";

type SectionProps = {
  label: string;
  title: string;
  background?: "white" | "gray";
  children: ReactNode;
};

export default function Section({
  label,
  title,
  background = "white",
  children,
}: SectionProps) {
  return (
    <section
      className={
        background === "gray"
          ? "bg-neutral-50"
          : "bg-white"
      }
    >
      <div className="container section">
        <div className="max-w-4xl">
          <p className="label">
            {label}
          </p>

          <h2 className="heading-lg mt-6">
            {title}
          </h2>

          <div className="mt-12 space-y-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}