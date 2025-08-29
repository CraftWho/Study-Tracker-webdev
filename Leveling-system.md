# 🎮 Leveling System v2.0

This file defines the dynamic progression system used across the Study Tracker Codex. It governs how Developer Points (DP) translate into level-ups, unlocks, and mastery tiers.

---

## 🧠 DP Sources

| Source Type             | DP Earned         | Notes                                      |
|-------------------------|-------------------|--------------------------------------------|
| 📹 Lesson / Video       | +100 DP           | Logged upon completion                     |
| ❓ Quiz Question         | +10 DP per correct| Logged per assessment                      |
| 🧾 Side Quest           | +50 to +150 DP    | Based on complexity and scope              |
| 🧠 Codex Expansion      | +25 to +50 DP     | Optional bonus for structural improvements |

---

## 🧱 Level Thresholds

| Level Range | DP Required to Level Up | Cumulative DP Span | Notes                          |
|-------------|--------------------------|---------------------|--------------------------------|
| Levels 1–4  | 200 DP                   | 0–800               | Starter tier                   |
| Levels 5–9  | 300 DP                   | 801–2300            | Mid-tier mastery               |
| Levels 10–14| 400 DP                   | 2301–4300           | Advanced tier                  |
| Levels 15–19| 500 DP                   | 4301–6800           | Master tier                    |
| Level 20+   | Custom scaling           | 6801+               | Prestige tier (custom unlocks) |

> 🔁 Every 5 levels, the DP required increases by +100. This encourages deeper mastery and modular questing.

---

## 🧙 Example Progression

| Level | DP Required | Cumulative DP Range | Title Example             |
|-------|-------------|----------------------|---------------------------|
| 1     | 200         | 0–200                | 🌱 Newborn Coder          |
| 2     | 200         | 201–400              | 🧙 Apprentice of HTML      |
| 3     | 200         | 401–600              | 🛡️ Adept of the DOM        |
| 4     | 200         | 601–800              | 🎨 CSS Initiate            |
| 5     | 300         | 801–1100             | ⚔️ DOM Strategist          |
| 6     | 300         | 1101–1400            | 🧠 Event Architect         |
| 7     | 300         | 1401–1700            | 📱 Responsive Engineer     |
| 8     | 300         | 1701–2000            | 🧬 UX Alchemist            |
| 9     | 300         | 2001–2300            | 🧾 Codex Refactorer        |
| 10    | 400         | 2301–2700            | 🏗️ Full Stack Initiate     |

---

## 🔄 Integration Protocol

Update the following files when a level-up or DP milestone occurs:

| File Name         | Update Required                          |
|------------------|-------------------------------------------|
| `README.md`       | Current level, DP, and unlocked skills    |
| `DP-Log.md`       | DP earned, source, and cumulative total   |
| `codex.md`        | Title unlocked, abilities gained          |
| `Skill-Tree.md`   | New nodes unlocked                        |
| `Patch-Notes.md`  | Versioned log of changes                  |
| `Quiz-Log.md`     | Assessment results and DP earned          |
| `webpage-start.md`| Visual updates if applicable              |

---

## 🧾 Notes

- Use **MM-DD-YYYY** format for all timestamps  
- Patch version must increment (e.g. v1.4.5 → v1.5)  
- Emoji polish required for codex consistency  
- Side quests and codex refactors are encouraged to reach higher tiers

---
