import { createFileRoute, notFound } from "@tanstack/react-router";
import { findLesson, LessonPlayer } from "@/components/zaban/lesson-player";
import { metadata } from "@/components/zaban/shell";
export const Route = createFileRoute("/lesson/$lessonId")({
  loader: ({ params }) => {
    const lesson = findLesson(params.lessonId);
    if (!lesson) throw notFound();
    return lesson;
  },
  head: ({ loaderData }) =>
    metadata(
      loaderData?.title ?? "درس پیدا نشد",
      loaderData?.explanation ?? "درس‌های انگلیسی زبان‌لند",
    ),
  component: LessonPage,
});
function LessonPage() {
  const lesson = Route.useLoaderData();
  return <LessonPlayer key={lesson.id} lesson={lesson} />;
}
