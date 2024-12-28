import { Grid } from "@chakra-ui/react";
import { MetricsGridProps } from "@/app/types/metrics";
import MetricCard from "./MetricCard";

export default function MetricCards({
  metrics,
  columns = { base: 1, md: 2, lg: 4 },
}: MetricsGridProps) {
  return (
    <Grid
      templateColumns={{
        base: `repeat(${columns.base || 1}, 1fr)`,
        md: `repeat(${columns.md || 2}, 1fr)`,
        lg: `repeat(${columns.lg || 4}, 1fr)`,
      }}
      gap={8}
      mb={8}>
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} animationDelay={index * 0.1} />
      ))}
    </Grid>
  );
}
