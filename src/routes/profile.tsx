import { createFileRoute } from "@tanstack/react-router";
import { ProfilePage } from "@/components/zaban/pages";
import { metadata } from "@/components/zaban/shell";
export const Route = createFileRoute("/profile")({
  head: () => metadata("حساب و تنظیمات", "هدف روزانه و تنظیمات زبان‌لند."),
  component: ProfilePage,
});
