import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const STEP_LABELS = ["Project", "Functies", "Timing", "Gegevens"];

interface Props {
  step: number;
  total?: number;
  canNext: boolean;
  sending: boolean;
  onNext: () => void;
  onPrev: () => void;
}

export function ProgressIndicator({ step, total = 4, canNext, sending, onNext, onPrev }: Props) {
  const isFirst = step === 1;
  const isLast = step === total;
  // Dots staan in het midden van elke kolom: 12.5%, 37.5%, 62.5%, 87.5%.
  // De lijn loopt van de eerste tot de laatste stip (12.5% → 87.5% = 75% breed).
  const fillPct = ((step - 1) / (total - 1)) * 75;

  return (
    <div className="flex flex-col gap-6">

      {/* Stappen: label + stip in dezelfde kolom, dus altijd uitgelijnd */}
      <div className="relative grid grid-cols-4">
        {/* Track + fill, op de hoogte van de stippen */}
        <div className="pointer-events-none absolute bottom-[3px] left-[12.5%] right-[12.5%] h-px bg-ink/15" />
        <motion.div
          className="pointer-events-none absolute bottom-[3px] left-[12.5%] h-px origin-left bg-ink"
          animate={{ width: `${fillPct}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
        />

        {STEP_LABELS.map((label, i) => {
          const n = i + 1;
          return (
            <div key={label} className="flex flex-col items-center gap-3">
              <span
                className={cn(
                  "text-center text-[0.7rem] uppercase tracking-[0.12em] transition-colors duration-300",
                  n === step ? "font-medium text-ink" : "text-ink/30"
                )}
              >
                {label}
              </span>
              <div className="relative z-10 flex h-2.5 items-center justify-center">
                <motion.div
                  animate={{ scale: n === step ? 1.4 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-colors duration-300",
                    n <= step ? "bg-ink" : "bg-ink/20"
                  )}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Knoppen */}
      <div className="flex items-center gap-2">
        {!isFirst && (
          <motion.button
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            onClick={onPrev}
            className="shrink-0 rounded-full bg-ink/5 px-5 py-3 text-sm text-ink-soft transition-colors hover:bg-ink/10"
          >
            ←
          </motion.button>
        )}
        <button
          onClick={onNext}
          disabled={!canNext || sending}
          className="group relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-background transition-colors disabled:opacity-30"
        >
          <span className="absolute inset-0 -translate-y-full bg-accent transition-transform duration-500 group-hover:translate-y-0" />
          <span className="relative flex items-center gap-2">
            {isLast && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                <CircleCheck size={16} />
              </motion.span>
            )}
            {sending ? "Versturen…" : isLast ? "Plan gesprek" : "Volgende"}
          </span>
        </button>
      </div>
    </div>
  );
}
