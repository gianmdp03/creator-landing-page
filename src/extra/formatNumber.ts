export function formatNumber(value: number): string {
  if (value >= 1_000_000) {
    return (
      (value / 1_000_000).toFixed(1).replace(".0", "").replace(".", ",") + " M"
    );
  }

  if (value > 1_000) {
    return (
      (value / 1_000).toFixed(1).replace(".0", "").replace(".", ",") + " mil"
    );
  } else if (value == 1000) {
    return "1.000";
  }

  return value.toString();
}
