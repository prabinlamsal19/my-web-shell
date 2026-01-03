export const GRATEFUL_PROMPT = [
  "<br>",
  "What is one thing you are grateful for today?",
  "<br>"
];

const GRATEFUL_RESPONSES = [
  "That's a beautiful thing to be grateful for. Cherish it.",
  "Gratitude turns what we have into enough. Thank you for sharing.",
  "It's the little things that make life big. That's wonderful.",
  "Focusing on the good makes the good get better. Keeps shining.",
  "A grateful heart is a magnet for miracles. Keep that positivity!",
  "Acknowledging the good in your life is the foundation for all abundance.",
  "That sounds lovely. Holding onto that feeling can brighten your whole day."
];

export const getGratefulResponse = (): string[] => {
  const r = Math.floor(Math.random() * GRATEFUL_RESPONSES.length);
  return [
    "<br>",
    GRATEFUL_RESPONSES[r],
    "<br>"
  ];
}
