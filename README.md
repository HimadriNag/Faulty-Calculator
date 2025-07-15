# Faulty Calculator 🤖➗➕

This is a fun JavaScript-based "Faulty Calculator" project. It behaves like a regular calculator most of the time — but 10% of the time, it intentionally gives the wrong result by switching the mathematical operation!

## 🔧 How It Works

- The user is prompted to enter two numbers and a mathematical operation (`+`, `-`, `*`, or `/`).
- 90% of the time: It calculates and returns the correct result.
- 10% of the time: It changes the operation using a predefined faulty mapping:
  - `+` becomes `-`
  - `-` becomes `/`
  - `*` becomes `+`
  - `/` becomes `**` (exponentiation)
- The result is shown using both `console.log()` and an `alert()` popup.

## 💡 Example

If you enter:
- Number 1: `5`
- Number 2: `3`
- Operation: `+`

It will usually return `8`, but sometimes it will return `2` (because `+` was replaced with `-`).

## 📁 Files

- `index.html` – Basic HTML file to load the script.
- `script.js` – Contains the faulty calculator logic.

## 🚀 How to Run

1. Open `index.html` in any modern web browser.
2. Enter values as prompted.
3. Watch for an occasionally "wrong" result! 😉

## 📌 Note

This project uses `eval()`, which should be avoided in production code due to security reasons. It's used here for simplicity in a learning project.

## 👨‍💻 Author

Himadri Nag
