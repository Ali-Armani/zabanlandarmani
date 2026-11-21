import { createContext, useContext, useState, type ReactNode } from "react";
interface LearningState {
  name: string;
  completed: string[];
  favorites: string[];
  knownWords: string[];
  xp: number;
  goal: number;
  dark: boolean;
  minutes: number;
  placement: string | null;
}
interface LearningContext extends LearningState {
  update: (patch: Partial<LearningState>) => void;
  complete: (id: string) => void;
  toggleFavorite: (id: string) => void;
  markKnown: (word: string) => void;
}
const initial: LearningState = {
  name: "دوست من",
  completed: [],
  favorites: [],
  knownWords: [],
  xp: 0,
  goal: 15,
  dark: false,
  minutes: 0,
  placement: null,
};
const Context = createContext<LearningContext | null>(null);
export function LearningProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(initial);
  const update = (patch: Partial<LearningState>) => setState((old) => ({ ...old, ...patch }));
  const complete = (id: string) =>
    setState((old) =>
      old.completed.includes(id)
        ? old
        : { ...old, completed: [...old.completed, id], xp: old.xp + 20, minutes: old.minutes + 5 },
    );
  const toggleFavorite = (id: string) =>
    setState((old) => ({
      ...old,
      favorites: old.favorites.includes(id)
        ? old.favorites.filter((f) => f !== id)
        : [...old.favorites, id],
    }));
  const markKnown = (word: string) =>
    setState((old) => ({
      ...old,
      knownWords: old.knownWords.includes(word) ? old.knownWords : [...old.knownWords, word],
    }));
  return (
    <Context.Provider value={{ ...state, update, complete, toggleFavorite, markKnown }}>
      <div className={state.dark ? "dark" : ""}>{children}</div>
    </Context.Provider>
  );
}
export function useLearning() {
  const context = useContext(Context);
  if (!context) throw new Error("LearningProvider required");
  return context;
}
