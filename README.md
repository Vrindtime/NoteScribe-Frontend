# Note Scribe ✍️🎙️

**Turn your notes into natural-sounding speech — instantly.**

A **Free & Open Source** (FOSS) text-to-speech web app built **for students, by a student. **. Paste your study notes, essays, or flashcards — and listen while you revise, walk, or multitask.

---

## ✨ Features

- **Real-time TTS** using [Piper](https://github.com/rhasspy/piper) (fast, offline-capable, natural voices)
- **Two pacing modes**:
  - `Writing` – 4 spaces per sentence (ideal for handwriting revision)
  - `Typing` – 2 spaces (faster, for digital notes)
- **Speed control** (0.5x – 2.0x)
- **Processing modal** with spinner
- **Keyboard shortcuts** (after playback starts):
  - `Space` → Play / Pause
  - `←` → Rewind 3 seconds
  - `→` → Forward 3 seconds
- **Responsive & minimal UI** – works on mobile & desktop
- **No tracking. No ads. Fully FOSS.**

---

## 🛠️ Tech Stack

| Part          | Technology                                                                                                |
|---------------|-----------------------------------------------------------------------------------------------------------|
| **Frontend**  | HTML, CSS, Vanilla JavaScript                                                                             |
| **Backend**   | [Python + AWS ( Lambda + ECR +S3 ) + Docker +Piper TTS]                                                   |
| **CI/CD**     | Github Actions                                                                                            |
| **TTS Engine**| [Piper](https://github.com/rhasspy/piper) – Fast, local-first neural TTS                                   |

> **Backend Repository**: [Note Scribe Backend](https://github.com/Vrindtime/NoteScribe/)
> **Uptime**: [Uptime Robot](https://stats.uptimerobot.com/V7Avx6GTYJ)

---

## 🎮 How to Use

1. Paste your text (notes, summary, essay, etc.)
2. Choose **pace**:
   - `Writing` → slower, with pauses (great for revision)
   - `Typing` → faster flow
3. Adjust **speed** (0.5x – 2.0x)
4. Press **Speak** or `Ctrl + Enter`
5. Use **Space**, **←**, **→** to control playback

---
## Architecture
<img width="960" height="790" alt="Note Scribe" src="https://github.com/user-attachments/assets/533acef9-2157-46e9-9ca8-4975dbffe250" />
