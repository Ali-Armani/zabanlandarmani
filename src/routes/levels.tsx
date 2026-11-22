import { createFileRoute } from "@tanstack/react-router";
import { LevelsPage } from "@/components/zaban/pages";
import { metadata } from "@/components/zaban/shell";
export const Route = createFileRoute("/levels")({
  head: () => metadata("مسیر یادگیری", "درس‌های A1 تا B1 با توضیح فارسی و تمرین کاربردی."),
  component: LevelsPage,
});
