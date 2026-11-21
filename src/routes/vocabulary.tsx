import { createFileRoute } from "@tanstack/react-router";
import { VocabularyPage } from "@/components/zaban/pages";
import { metadata } from "@/components/zaban/shell";
export const Route = createFileRoute("/vocabulary")({
  head: () => metadata("دفتر واژگان", "مرور واژگان، تلفظ و ترکیب‌های انگلیسی."),
  component: VocabularyPage,
});
