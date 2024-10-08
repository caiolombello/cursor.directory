import { Menu } from "@/components/menu";
import { RuleCard } from "@/components/rule-card";
import { rules } from "@/data";

const categories = Array.from(new Set(rules.flatMap((rule) => rule.tags)));
const sections = categories.map((tag) => ({
  tag,
  rules: rules.filter((rule) => rule.tags.includes(tag)),
}));

export default function Page() {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <div className="hidden md:flex mt-12">
        <Menu sections={sections} />
      </div>

      <main className="flex-1 p-6 overflow-auto pt-16">
        {sections.map((section, idx) => (
          <section key={section.tag} id={section.tag}>
            <h3 className="text-lg font-semibold mb-4">{section.tag}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
              {section.rules.map((rule, idx2) => (
                <RuleCard key={`${idx}-${idx2.toString()}`} rule={rule} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
