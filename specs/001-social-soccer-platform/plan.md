# Implementation Plan: Social Soccer Platform

**Branch**: `001-social-soccer-platform` | **Date**: 2026-07-27 | **Spec**: [spec.md](file:///c:/Users/brian/social-soccer/specs/001-social-soccer-platform/spec.md)

**Input**: Feature specification from `/specs/001-social-soccer-platform/spec.md`

## Summary

Build **Social Soccer**, a digital web platform for Ecuadorian amateur soccer leagues. The solution modernizes paper-based registration, insecure cash payments, and fragmented communication by providing:
1. Digital player identity passes with QR verification tokens.
2. League, division, match schedule, and referee assignment management.
3. Simple, transparent digital payment processing for league fees, match fees, and fines.
4. Offline-resilient pitch-side match reporting for referees (goals, cards, lineups, fair play scores).
5. Automated Fair Play Rewards engine and statistical leaderboards.

---

## Technical Context

**Language/Version**: TypeScript 5.x / Node.js 20.x / React 18
**Primary Dependencies**: Wasp Framework (v0.15+), Prisma ORM, TailwindCSS, ShadCN UI, Lucide React, qrcode
**Storage**: PostgreSQL (via Prisma ORM in `template/app/schema.prisma`)
**Testing**: Playwright (`template/e2e-tests`), ESLint, Prettier
**Target Platform**: Web application (Responsive Desktop & Mobile Web)
**Project Type**: Full-stack Web Application (Wasp SaaS Template)
**Performance Goals**: Sub-second page load times, <300ms API response time, instant QR validation
**Constraints**: Wasp architecture compliance, full-stack type safety, offline-resilient match reporting
**Scale/Scope**: ~100s of teams, ~1,000s of amateur players per league

---

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle / Gate | Assessment | Status |
|------------------|------------|--------|
| **I. Full-Stack Type Safety & Wasp Architecture** | All client-server operations leverage Wasp Queries and Actions with Prisma schema models. | ✅ PASS |
| **II. Modular SaaS Design & Component Isolation** | Clean separation maintained between core template (`template/app`) and docs (`opensaas-sh`). UI uses ShadCN/Tailwind. | ✅ PASS |
| **III. Automated Code Quality & Formatting Discipline** | ESLint (`npm run lint`) and Prettier (`npm run prettier:check`) enforced. | ✅ PASS |
| **IV. End-to-End & Integration Testing** | Key user flows covered by Playwright tests in `template/e2e-tests`. | ✅ PASS |
| **V. Documentation & Demo Synchronization** | Capability changes synced with docs and demo app. | ✅ PASS |

*All Constitution gates PASSED.*

---

## Project Structure

### Documentation (this feature)

```text
specs/001-social-soccer-platform/
├── spec.md              # Feature specification
├── plan.md              # Implementation plan (this file)
├── research.md          # Phase 0 research findings
├── data-model.md        # Phase 1 data model schema & entity diagrams
├── quickstart.md        # Phase 1 runnable validation guide
└── contracts/           # Phase 1 API interface contracts
    ├── player-api.md
    ├── league-api.md
    ├── payments-api.md
    └── match-api.md
```

### Source Code Layout

```text
template/app/
├── main.wasp.ts         # Wasp App configuration, routes, operations, and jobs
├── schema.prisma        # Database entities (User, PlayerProfile, League, Team, Match, etc.)
└── src/
    ├── player/          # Player digital identity, registration, QR generation
    ├── league/          # Tournament setup, scheduling, division management
    ├── referee/         # Pitch-side match sheet recording & referee assignment
    ├── payment/         # Invoice creation, card processing, transfer receipt approval
    └── fairplay/        # Fair play points calculation and rewards engine

template/e2e-tests/
└── tests/              # Playwright E2E test suites
    ├── player-id.spec.ts
    ├── scheduling.spec.ts
    ├── match-sheet.spec.ts
    └── payments.spec.ts
```

**Structure Decision**: Web application utilizing the Wasp full-stack directory structure in `template/app/` with E2E tests in `template/e2e-tests/`.

---

## Complexity Tracking

> *No Constitution violations identified. No complexity exceptions required.*

---

## Verification Plan

### Automated Tests
- `npm run lint`: Code quality & ESLint validation.
- `npm run prettier:check`: Formatting standard check.
- `cd template/e2e-tests && npx playwright test`: Full end-to-end integration test suite.

### Manual Verification
- Execute runnable verification scenarios defined in [quickstart.md](file:///c:/Users/brian/social-soccer/specs/001-social-soccer-platform/quickstart.md).
