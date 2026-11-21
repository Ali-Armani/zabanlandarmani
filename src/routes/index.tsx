import { createFileRoute } from "@tanstack/react-router";
import { Dashboard } from "@/components/zaban/dashboard";
import { metadata } from "@/components/zaban/shell";
export const Route = createFileRoute("/")({
  head: () =>
    metadata(
      "خانهٔ من",
      "انگلیسی را قدم به قدم با درس‌های فارسی، تمرین‌های کاربردی و سنجاب زبان‌لند یاد بگیر.",
    ),
  component: Dashboard,
});
