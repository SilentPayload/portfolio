import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";

export function Skills() {
  return (
    <section id="skills" className="border-t border-edge py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal>
          <SectionLabel index="02">Skills</SectionLabel>
          <h2 className="text-3xl font-bold text-ink mb-12">
            Technical proficiencies
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <Reveal key={group.name} delay={i * 60}>
              <div className="rounded-xl border border-edge bg-surface p-5 h-full">
                <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                  {group.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
