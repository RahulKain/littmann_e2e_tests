# 🏥 Littmann Stethoscopes E2E Automation

![Playwright](https://img.shields.io/badge/Playwright-1.40+-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

## 📋 Executive Summary

This repository hosts the **Enterprise E2E Automation Framework** for [Littmann Stethoscopes India](https://www.littmann.in/3M/en_IN/littmann-stethoscopes-in/). It serves as the primary validation layer for critical business flows, ensuring high reliability and user experience standards.

The framework is built on **Playwright + TypeScript**, adhering to strict component-based architecture and granular testing patterns.

---

## 🏗️ Architecture Overview

The project follows a strict **Component Object Model (COM)** (see [Standards](./AI_TEST_STANDARDS.md) for details).

-   **`src/components`**: Reusable shared UI widgets (Header, Footer).
-   **`src/pages`**: Page-specific logic composing components.
-   **`src/fixtures`**: Dependency Injection container (Test Context).
-   **`src/tests`**: Atomic test specifications (No logic allowed).

---

## 📊 Coverage Status

| Module | Focus Area | Status |
|:------:|------------|:------:|
| **M1** | Navigation & Page Load | ✅ Active |
| **M2** | Search Functionality | ✅ Active |
| **M3** | Product Catalog | ✅ Active |
| **M4** | Contact Form | ✅ Active |
| **M5** | Dealer Locator | ✅ Active |
| **M6** | UI Consistency | ✅ Active |

For a detailed breakdown of test cases, refer to [`testcases.md`](./testcases.md).

---

## 📚 Documentation Hub

Detailed documentation is strictly separated by concern. Please refer to the specific documents below for in-depth guidelines.

| Document | Purpose | Audience |
|----------|---------|----------|
| [**📘 Blueprint**](./blueprint.md) | **Primary Entry Point.** execution workflow, phases, and AI agent instructions. | Agents & Leads |
| [**📏 Standards**](./AI_TEST_STANDARDS.md) | **Strict** coding standards, locator strategies, and architectural rules. | Everyone |
| [**🧪 Test Creation**](./createtest_instructions.md) | Step-by-step guide for implementing atomic test cases. | SDETs |
| [**💾 Git Strategy**](./githubpush_instructions.md) | granular commit policy and push procedures. | Everyone |
| [**📋 Test Plan**](./testcases.md) | Detailed test specifications and coverage. | Everyone |

---

## 🚀 Quick Start

### 1. Installation

```bash
git clone <repository_url>
npm install
npx playwright install --with-deps
```

### 2. Configuration

Set up your environment variables.
```bash
cp .env.example .env
# Edit .env to set BASE_URL and credentials
```

### 3. Execution

| Action | Command |
|--------|---------|
| **Run All Tests** | `npm test` |
| **Interactive UI** | `npm run test:ui` |
| **Debug Mode** | `npm run test:debug` |
| **View Report** | `npm run report` |

---

> **Note:** All contributions must strictly follow the [`githubpush_instructions.md`](./githubpush_instructions.md) workflow. "One Thing, One Commit".
