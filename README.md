# BreezeCss
# 🌬️ Breeze.css

**Breeze.css** är ett lättviktigt, utility-first CSS-ramverk som hjälper dig bygga moderna, responsiva och vackra gränssnitt snabbt – utan att bli överväldigad av onödig komplexitet.

Inspirerat av TailwindCSS, men betydligt mindre och enklare att förstå, modifiera och använda.

---

## ✨ Funktioner

- 🔧 Utility-first klassnamn (t.ex. `flex`, `p-4`, `text-center`, `bg-blue-500`)
- 🎨 Färgskalor för blå, röd, grön, gul m.m. (`100`–`900`)
- 📱 Responsiva breakpoint-klasser (`sm:`, `md:`, `lg:`, `xl:`)
- 🌗 Inbyggt stöd för Dark Mode (`[data-theme="dark"]`)
- 🧩 Komponentvänlig struktur – enkelt att bygga egna UI-bibliotek ovanpå
- ⚡ Ingen build step – bara ladda in CSS-filen
- 🧪 Playground ingår (live HTML + preview)

---

## 🚀 Kom igång

### 1. Inkludera Breeze.css

```html
<link rel="stylesheet" href="dist/breeze.css">
```

### 2. Börja skriva HTML

```html
<div class="p-4 bg-yellow-200 text-yellow-900 rounded shadow-md">
  Hello from Breeze!
</div>
```

---

## 🎮 Playground

Utforska och testa dina klasser direkt i webbläsaren.

> Öppna `playground.html` för en live-editor med preview, dark mode-toggle och stöd för hela ramverket.

---

## 🌓 Dark Mode

Använd attributet `data-theme="dark"` på `<html>` för att aktivera dark mode:

```html
<html data-theme="dark">
```

Färger, bakgrunder, knappar och komponenter anpassar sig automatiskt.

---

## 🧱 Exempelkomponenter

Breeze kommer med grundläggande byggblock: knappar, kort, badges m.m. som du enkelt kan anpassa med utility-klasser.

```html
<button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
  Click me
</button>
```

---

## 📁 Struktur

```
/
├── index.html         ← Dokumentationssida
├── playground.html     ← Live preview & kodeditor
├── dist/
│   └── breeze.css      ← Ramverket
├── scripts/
│   └── playground.js   ← JS för playground
```

---

## 🧑‍💻 Bidra

Det här projektet är öppet för förbättringar! Skapa issues eller skicka en pull request med dina idéer:

- Fler färgteman
- Fler komponenter
- Animationer
- Typografi-klasser

---

## 📄 Licens

MIT © Ditt Namn eller Ditt Företag

---

## 🔗 Länkar

- 🌐 [Demo / Dokumentation](index.html)
- 🧪 [Playground](playground.html)

---

Happy hacking! 💨
