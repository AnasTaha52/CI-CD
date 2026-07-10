# 🧮 CI/CD Calculator

A simple JavaScript calculator project built to **learn CI/CD from scratch** using **GitHub Actions**.

---

## 📌 What This Project Does

This project contains a basic calculator module (`math.js`) with five arithmetic operations. It uses **Jest** for unit testing and **GitHub Actions** to automatically run those tests on every push and pull request — that's the CI/CD pipeline in action!

---

## 🗂️ Project Structure

```
CICD/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions CI pipeline
├── src/
│   └── math.js             # Calculator module (add, subtract, multiply, divide, modulo)
├── test/
│   ├── math.test.js        # ✅ Passing test cases
│   └── math.fail.test.js   # ❌ Intentionally failing tests (for learning)
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Calculator Functions

| Function | Description | Example |
|---|---|---|
| `add(a, b)` | Adds two numbers | `add(2, 3)` → `5` |
| `subtract(a, b)` | Subtracts b from a | `subtract(10, 4)` → `6` |
| `multiply(a, b)` | Multiplies two numbers | `multiply(3, 4)` → `12` |
| `divide(a, b)` | Divides a by b | `divide(10, 2)` → `5` |
| `modulo(a, b)` | Remainder of a ÷ b | `modulo(10, 3)` → `1` |

---

## 🧪 Running Tests Locally

```bash
# Install dependencies
npm install

# Run all tests
npm test
```

---

## 🚀 CI/CD Pipeline (GitHub Actions)

Every time you **push** or open a **Pull Request** to `main`, GitHub Actions automatically:

1. 🖥️ Spins up a fresh Ubuntu machine
2. 📦 Installs Node.js 20 and dependencies
3. 🧪 Runs all Jest tests
4. ✅ Reports pass / ❌ blocks merge on failure

You can see every run live under the **Actions** tab of this repository.

---

## 🎓 What I Learned

- Writing modular JavaScript with `module.exports`
- Writing unit tests with **Jest** (`describe`, `test`, `expect`)
- Understanding different types of test failures (logic errors, type mismatches, floating point issues)
- Setting up a **CI pipeline** with GitHub Actions (`.github/workflows/ci.yml`)
- How CI protects the `main` branch by blocking failing PRs

---

## 🛠️ Tech Stack

- **Language**: JavaScript (Node.js)
- **Testing**: Jest
- **CI/CD**: GitHub Actions
