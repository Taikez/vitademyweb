type StatProps = {
  label: string;
  value: number | string;
};

export default function Stat({ label, value }: StatProps) {
  return (
    <div className="rounded-lg border p-4">
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  );
}
