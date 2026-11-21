import { describe, it, expect } from "vitest";
import {
  units,
  lessons,
  vocabulary,
  normalizeAnswer,
  placementLevel,
} from "@/features/learning/content";
describe("A1 learning foundation", () => {
  it("includes the requested A1 topics", () => {
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
    ]);
  });
  it("keeps higher levels outside the active curriculum", () => {
    expect(units.every((u) => u.level === "A1")).toBe(true);
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
    expect(ids.every((id) => /^[a-z]+$/.test(id))).toBe(true);
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
