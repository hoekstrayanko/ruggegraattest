export type Stats = {
  visits: number | null;
  completions: number | null;
};

function formatNumber(n: number) {
  return new Intl.NumberFormat("nl-NL").format(n);
}

export default function StatsBar({ stats }: { stats: Stats }) {
  if (stats.visits === null || stats.completions === null) {
    return (
      <p className="text-xs text-zinc-400">
        Tellertjes zijn nog niet aangesloten — zie README voor de setup. 🔌
      </p>
    );
  }

  const { visits, completions } = stats;
  const percentage =
    visits > 0 ? Math.min(100, Math.round((completions / visits) * 100)) : 0;

  return (
    <div className="flex flex-col gap-1 rounded-2xl bg-purple-50 px-4 py-3 text-sm text-zinc-600">
      <p>
        🧍‍♂️🧍‍♀️ <span className="font-bold text-purple-900">{formatNumber(visits)}</span>{" "}
        dappere zielen waagden zich al aan deze pagina.
      </p>
      <p>
        🦴 <span className="font-bold text-purple-900">{formatNumber(completions)}</span>{" "}
        daarvan ({percentage}%) hielden vol tot het bittere eind en bleken dus
        tóch ergens een sliertje ruggegraat te hebben. Knap hoor.
      </p>
    </div>
  );
}
