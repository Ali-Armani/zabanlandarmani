import { createFileRoute } from "@tanstack/react-router";
import { PlacementPage } from "@/components/zaban/pages";
import { metadata } from "@/components/zaban/shell";
export const Route = createFileRoute("/placement")({
  head: () => metadata("تعیین سطح", "آزمون کوتاه تعیین سطح انگلیسی."),
  component: PlacementPage,
});
