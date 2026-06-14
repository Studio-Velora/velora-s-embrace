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
  const fillPct = ((step - 1) / (total - 1)) * 100;

  return (
    <div className="flex flex-col gap-6">

      {/* Labels — 4 gelijke kolommen */}
      <div className="grid grid-cols-4 w-full">
        {STEP_LABELS.map((label, i) => (
          <span
            key={label}
            className={cn(
              "text-center text-xs tracking-[0.15em] uppercase transition-colors duration-300",
              i + 1 === step ? "text-ink font-medium" : "text-ink/30"
            )}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Dots + verbindingslijn */}
      <div className="grid grid-cols-4 w-full relative">
        {/* Track */}
        <div className="absolute top-[5px] left-[12.5%] right-[12.5%] h-px bg-ink/15" />
        {/* Geanimeerde fill */}
        <motion.div
          className="absolute top-[5px] left-[12.5%] h-px bg-ink origin-left"
          animate={{ width: `${fillPct * 0.75}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
        />
        {/* Dots */}
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className="flex justify-center relative z-10">
            <motion.div
              animate={{
                scale: i + 1 === step ? 1.4 : 1,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-colors duration-300",
                i + 1 <= step ? "bg-ink" : "bg-ink/20"
              )}
            />
          </div>
        ))}
      </div>

      {/* Knoppen */}
      <div className="flex items-center gap-2">
        {!isFirst && (
          <motion.button
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            onClick={onPrev}
            className="shrink-0 px-5 py-3 text-sm text-ink-soft bg-ink/5 rounded-full hover:bg-ink/10 transition-colors"
          >
            ←
          </motion.button>
        )}
        <button
          onClick={onNext}
          disabled={!canNext || sending}
          className="group relative flex-1 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-background disabled:opacity-30 transition-colors"
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
