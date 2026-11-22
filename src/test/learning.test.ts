import { describe, it, expect } from "vitest";
import {
  units,
  lessons,
  vocabulary,
  normalizeAnswer,
  placementLevel,
  levelOf,
} from "@/features/learning/content";
describe("A1 and A2 learning foundation", () => {
  it("includes the requested A1 and A2 topics in order", () => {
    expect(units.map((u) => u.id)).toEqual([
      "sounds",
      "numbers",
      "greetings",
      "personal",
      "family",
      "countries",
      "be",
      "pronouns",
      "have",
      "present",
      "routine",
      "frequency",
      "continuous",
      "articles",
      "plurals",
      "demonstratives",
      "possessives",
      "ownership",
      "there",
      "can",
      "imperatives",
      "prepositions",
      "questions",
      "colors",
      "adjectives",
      "feelings",
      "appearance",
      "food",
      "countable",
      "quantity",
      "wouldlike",
      "liking",
      "home",
      "body",
      "health",
      "time",
      "months",
      "weather",
      "jobs",
      "hobbies",
      "sports",
      "clothes",
      "shopping",
      "technology",
      "town",
      "directions",
      "transport",
      "comparatives",
      "superlatives",
      "waswere",
      "pastsimple",
      "irregular",
      "goingto",
      "conjunctions",
      "cafe",
      "polite",
      "vowels",
      "endings",
      "myself",
      "readfamily",
      "readday",
      "paragraph",
      "mistakes",
      "a2-simple",
      "a2-personality",
      "a2-continuous",
      "a2-simplecont",
      "a2-emotions",
      "a2-stative",
      "a2-past",
      "a2-irregular1",
      "a2-irregular2",
      "a2-sp-childhood",
      "a2-pastcont",
      "a2-pastcontrast",
      "a2-usedto",
      "a2-education",
      "a2-careers",
      "a2-perfect",
      "a2-evernever",
      "a2-justyet",
      "a2-perfectpast",
      "a2-dlg-experience",
      "a2-travel",
      "a2-dlg-hotel",
      "a2-rd-paris",
      "a2-wr-email",
      "a2-wr-past",
      "a2-will",
      "a2-willgoing",
      "a2-sp-future",
      "a2-wr-future",
      "a2-first",
      "a2-zero",
      "a2-obligation",
      "a2-medical",
      "a2-dlg-doctor",
      "a2-sp-health",
      "a2-couldcan",
      "a2-request",
      "a2-suggest",
      "a2-invite",
      "a2-dlg-plans",
      "a2-apologize",
      "a2-tooenough",
      "a2-manner",
      "a2-compare",
      "a2-adjectives2",
      "a2-shopping2",
      "a2-dlg-shop",
      "a2-complain",
      "a2-agree",
      "a2-opinion",
      "a2-wr-opinion",
      "a2-gerunds",
      "a2-articles",
      "a2-quantifiers",
      "a2-cooking",
      "a2-dlg-restaurant",
      "a2-tags",
      "a2-relative",
      "a2-questions",
      "a2-adjorder",
      "a2-chores",
      "a2-digital",
      "a2-environment",
      "a2-weather2",
      "a2-culture",
      "a2-fitness",
      "a2-traffic",
      "a2-social",
      "a2-money",
      "a2-verbs1",
      "a2-verbs2",
      "a2-phrasal1",
      "a2-phrasal2",
      "a2-phrasal3",
      "a2-makedo",
      "a2-takeget",
      "a2-havego",
      "a2-stress",
      "a2-connected",
      "a2-silent",
      "a2-sp-holiday",
      "a2-rd-week",
      "a2-rd-hobby",
      "a2-wr-place",
      "a2-mistakes1",
      "a2-mistakes2",
      "a2-mistakes3",
    ]);
  });
  it("keeps higher levels outside the active curriculum", () => {
    expect(units.every((u) => u.level === "A1" || u.level === "A2")).toBe(true);
    expect(levelOf("sounds")).toBe("A1");
    expect(levelOf("a2-simple")).toBe("A2");
  });
  it("every lesson includes interactive, speaking and communicative practice", () => {
    for (const lesson of lessons) {
      expect(lesson.activities.map((a) => a.kind)).toEqual(["choice", "writing", "speaking"]);
      expect(lesson.task.length).toBeGreaterThan(10);
      expect(lesson.vocabulary.length).toBeGreaterThan(0);
    }
  });
  it("checks concrete grammar answers", () => {
    expect(lessons.find((l) => l.id === "be")?.activities[0]?.answer).toBe("is");
    expect(lessons.find((l) => l.id === "can")?.activities[0]?.answer).toBe("She can swim.");
  });
  it("normalizes casing and punctuation without accepting wrong words", () => {
    expect(normalizeAnswer("I am a student!")).toBe(normalizeAnswer("i am a student."));
    expect(normalizeAnswer("I is a student")).not.toBe(normalizeAnswer("I am a student"));
    expect(normalizeAnswer("I'm a doctor.")).toBe(normalizeAnswer("I’m a doctor."));
  });
  it("keeps repeated words in one notebook entry", () => {
    expect(vocabulary.filter((word) => word.word === "name")).toHaveLength(1);
    expect(vocabulary.filter((word) => word.word === "mother")).toHaveLength(1);
  });
  it("keeps lesson ids unique and URL-safe", () => {
    const ids = lessons.map((lesson) => lesson.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids.every((id) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(id))).toBe(true);
  });
  it("has exactly one correct option in every multiple-choice question", () => {
    for (const lesson of lessons) {
      const choice = lesson.activities[0];
      const options = (choice?.options ?? []).map(normalizeAnswer);
      expect(new Set(options).size).toBe(options.length);
      expect(
        options.filter((option) => option === normalizeAnswer(choice?.answer ?? "")),
      ).toHaveLength(1);
    }
  });
  it("keeps notebook words unique and different from lesson ids", () => {
    const words = lessons.flatMap((lesson) => lesson.vocabulary.map((item) => item.word));
    expect(new Set(words).size).toBe(words.length);
    const ids = new Set(lessons.map((lesson) => lesson.id));
    expect(words.filter((word) => ids.has(word))).toEqual([]);
  });
  it("recommends foundational learning for low placement performance", () => {
    expect(placementLevel(2, 6)).toBe("A1");
    expect(placementLevel(5, 6)).toBe("A1-ready");
  });
});
