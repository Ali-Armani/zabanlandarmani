export function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return false;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.8;
  window.speechSynthesis.speak(utterance);
  return true;
}
interface SpeechResult {
  results: ArrayLike<ArrayLike<{ transcript: string }>>;
}
interface Recognition {
  lang: string;
  interimResults: boolean;
  onresult: ((event: SpeechResult) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}
export function recognize(onResult: (text: string) => void, onEnd: () => void): Recognition | null {
  const browser = window as unknown as {
    SpeechRecognition?: new () => Recognition;
    webkitSpeechRecognition?: new () => Recognition;
  };
  const Constructor = browser.SpeechRecognition ?? browser.webkitSpeechRecognition;
  if (!Constructor) return null;
  const recognition = new Constructor();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.onresult = (e) => {
    const result = e.results[0]?.[0];
    if (result) onResult(result.transcript);
  };
  recognition.onerror = onEnd;
  recognition.onend = onEnd;
  recognition.start();
  return recognition;
}
