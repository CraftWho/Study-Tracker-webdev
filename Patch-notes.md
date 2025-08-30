## 🧪 Patch Notes – Study Tracker WebDev

---

### 🧪 Patch v1.0 – Static UI Initialized

- Created `index.html`, `style.css`, and `script.js` inside `Webpage-Start/`
- Scaffolded modular webpage with RPG theme and quest intro
- Added nav bar with placeholder links
- Implemented `showMessage()` alert function for quest start
- Logged quest completion in `Q002_Introduction_to_HTML/quest.md`

---

### 🧪 Patch v1.1 – Royal UI Overhaul

- Refactored `style.css` to use black/gold/crimson color palette
- Replaced flat gold with metallic gradient (`#b8860b → #ffd700`)
- Centered “Begin Quest” button using `margin: auto`
- Improved text readability with brighter silver and stronger font weight
- Added RPG-style font (`Cinzel`) via Google Fonts
- Enhanced header with shadow and border accents
- Upgraded container styling with glow, border, and spacing
- Modularized CSS into sections: Layout, Header, Navigation, Container, Typography, Button, Footer

---

### 🧪 Patch v1.2 – Quest System Expansion

- Verified and logged `Q001_Introduction_to_the_web/Quest.md` as first main quest
- Verified and logged `Q002_Introduction_to_HTML/quest.md` as second main quest
- Linked both quests to `codex.md` and `Skill-Tree.md`
- Logged titles earned: *Pathfinder of the Stack*, *Newborn Coder*, *Apprentice of HTML*, *CSS Initiate*
- Logged abilities unlocked: *Markup Fluency*, *Client/Server Awareness*, *Version Control Initiation*, *Tracker Discipline*, *Semantic Tag Mastery*, *ASCII Visualization*

---

### 🧪 Patch v1.3 – Side Quest Integration

- Added `Q001_SideQuest_ClientServer.md` with ASCII sketch of client/server flow
- Added `Q002_SideQuest_Networking_diagram.md` with LAN vs WAN breakdown
- Linked both side quests to codex and mastery system
- Reinforced networking concepts from Q001 with visual diagrams

---

### 🧪 Patch v1.4 – DP Progress Tracker Added

- Implemented dynamic gold-filled progress bar  
- Synced with current DP and level system  
- Styled for RPG immersion with glowing effects  
- Future-ready for milestone animations and class unlocks

### 🧪 Patch v1.5.2 – DP Sync Fix

- Synced JSON key `nextlevelDP` with script references  
- Progress bar now fills correctly based on DP percentage  
- Next level DP displays as expected in both stat block and progress text  
- Progress text now dynamically shows: `600 / 800 DP to Level 4`  
- Removed legacy reference to `nextLevelDP` from script.js  
- Verified HTML IDs (`nextLevelDP`, `progress-text`, `fill`) are correctly wired  
- Confirmed `dp-data.json` schema integrity and emoji-enhanced skill array  
- Locked `nextlevelDP` as canonical key for future schema validation  
- Codex status interface now fully reactive and visually synced