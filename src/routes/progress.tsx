import { createFileRoute } from "@tanstack/react-router";
import { ProgressPage } from "@/components/zaban/pages";
import { metadata } from "@/components/zaban/shell";
export const Route = createFileRoute("/progress")({
  head: () => metadata("پیشرفت من", "پیشرفت درس‌ها و مهارت‌های انگلیسی."),
  component: ProgressPage,
});
