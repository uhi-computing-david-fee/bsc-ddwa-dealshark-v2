# 🎮 DealShark v2 (Teaching Repo)

This repository contains the **DealShark v2** project used in the module:

**Designing and Developing Web Applications (UG409759)**
**BSc Computing**

It is a structured teaching example used to demonstrate the core basics of building a modern front-end web application with **Angular**, **PrimeNG** and **Supabase**.

DealShark v2 expands on the original HTML, CSS and JavaScript version by introducing a more complete Angular application with:

* Deal browsing with filtering
* Full deal detail pages
* Routing between views
* Shared services for API access
* Authentication
* Basic local state management
* A persistent watchlist stored using Supabase

This version focuses on the essential Angular concepts needed to build a small but realistic web application.

Core teaching concepts include:

* Angular components
* Templates and property binding
* Event binding
* Services
* HTTP calls
* Observables
* Routing
* Route parameters
* Reactive forms
* Authentication flow
* Basic state management using `BehaviorSubject`
* Persistence using Supabase

This is **version 2** of the application. It builds on the earlier DealShark v1 project, which introduced the same general application idea using plain HTML, CSS and JavaScript first.

---

## 📌 Important

This repository is primarily for **reference and catch-up support**.

It is strongly recommended that you:

✅ Follow the live demos each week
✅ Complete exercises yourself
✅ Use this repo only when you need to check a solution or catch up

Resist the urge to copy and paste. You’ll learn far more by building the features yourself.

The goal is not just to have a working application. The goal is to understand how the pieces of an Angular application fit together.

---

## 🌿 Branch Structure (Learning Timeline)

The project is developed progressively across a series of branches.

Each branch represents the project state at the **end of a teaching block or exercise**.

Branch progression:

| Branch Name                  | Content                                                                         |
| ---------------------------- | ------------------------------------------------------------------------------- |
| `main`                       | Main branch, finished version 2 application                                     |
| `1-Components-and-Binding`   | Core Angular component structure, templates, property binding and event binding |
| `2-Routing`                  | Page navigation, Angular routing and route parameters                           |
| `3-Services-and-Observables` | Shared services, HTTP calls, observables and API data handling                  |
| `4-Reactive-Forms`           | Reactive forms for filtering, input handling and validation                     |
| `5-Auth-&-State`             | Authentication flow and basic local state management using `BehaviorSubject`    |
| `6-Supabase-Persistence`     | Persistent watchlist functionality using Supabase                               |

If you fall behind or want to compare your work, switch to the appropriate branch.

---

## 🧱 Technologies Used

DealShark v2 uses:

* **Angular**
* **PrimeNG**
* **TypeScript**
* **RxJS**
* **Supabase**
* **CheapShark API**

PrimeNG is used to support a more polished interface without requiring us to build every UI element from scratch.

Supabase is used to introduce authentication and simple database persistence.

---

## ⚠️ Notes

* Branches represent learning checkpoints, not production quality code
* Some implementations prioritise clarity for learning over optimisation
* The project is deliberately simplified for entry-level Angular development
* This version focuses on basic Angular patterns before introducing more advanced approaches
* The application avoids Angular Signals at this stage
* Local state is handled using basic RxJS and `BehaviorSubject`
* The project uses `zone.js` for simplified change detection
* Authentication and persistence are kept intentionally simple
* Error handling is suitable for teaching purposes, not full production use
* The project is designed to help students understand the structure of a small Angular application

---

## 🦈 About DealShark

DealShark is a teaching project based around browsing video game deals using the **CheapShark API**.

The first version focuses on building the application with plain HTML, CSS and JavaScript.

This second version revisits the same idea using Angular, giving students the chance to see how a larger application can be structured using components, services, routing and shared state.
