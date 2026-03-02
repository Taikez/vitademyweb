export default function PageLoader() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <div className="h-10 w-10 rounded-full border-4 border-muted border-t-primary animate-spin" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  );
}
