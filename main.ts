// The Tired Dark Lord: A 100-Word Villain Monologue
// A cursed king keeps postponing the invasion because the war banners
// need mending. Exactly 100 words, 555 characters. Writes /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const OPENING =
  "The banners need mending again. " +
  "The banners have needed mending for six years, " +
  "and the invasion cannot march under a torn old lion, " +
  "so the invasion waits. ";

const PAST_GLORIES =
  "I cursed the harvest, drowned the wells, " +
  "turned the prince into a\u2014into a something. " +
  "A swan? A spoon? It hardly matters now. ";

const THRONE_ROOM =
  "The throne room echoes. The crown slips. " +
  "The court applauds out of habit, and I nod out of habit, " +
  "and somewhere a hero is polishing a sword for me. ";

const DEFERRAL =
  "Let him polish. The banners, hero. First, the banners. " +
  "Then, perhaps, the end of the world. Tuesday, maybe. ";

const STING = "If the thread holds.";

const MONOLOGUE = OPENING + PAST_GLORIES + THRONE_ROOM + DEFERRAL + STING;

// Gate: the sealed scorer accepts 1-600 characters. Exactly 100 words,
// 555 characters as written; refuse rather than emit an invalid entry.
if (MONOLOGUE.length < 1 || MONOLOGUE.length > 600) {
  throw new Error(`monologue is ${MONOLOGUE.length} chars, must be 1-600`);
}
if (MONOLOGUE.trim().split(/\s+/).length !== 100) {
  throw new Error("monologue must be exactly 100 words");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MONOLOGUE, "utf8");
