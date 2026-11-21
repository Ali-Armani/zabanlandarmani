import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/zaban/pages";
import { metadata } from "@/components/zaban/shell";
export const Route = createFileRoute("/about")({
  head: () => metadata("دربارهٔ زبان‌لند", "یادگیری کاربردی انگلیسی برای فارسی‌زبان‌ها."),
  component: AboutPage,
});
