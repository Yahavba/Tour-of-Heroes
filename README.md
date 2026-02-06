# Tour of Heroes ⚔️

This repository contains my implementation of the official **Angular Tour of Heroes** tutorial.

You can read the full project specification and tutorial here:
 [Official Angular Tour of Heroes Tutorial](https://v17.angular.io/tutorial/tour-of-heroes).

## ⚡ About This Implementation

This project is based on the official tutorial but has been updated to run on **Angular 21+**.

It leverages the latest framework features including:

* **Standalone Components** (No NgModules)
* **New Control Flow:** Using `@for` and `@if` instead of `*ngFor` and `*ngIf`.
* **Modern RxJS Integration** (Observables & Subjects)

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:

* **Node.js:** Latest LTS version (Recommended).
    * [Download Node.js](https://nodejs.org/)
* **npm:** Typically comes installed with Node.js.
* **Angular CLI:** (Optional, if you want to run `ng` commands directly)
    * `npm install -g @angular/cli`

## 🛠️ How to Run

1. **Clone this repository:**
    ```bash
    git clone https://github.com/Yahavba/Tour-of-Heroes.git
    cd Tour-of-Heroes
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # If needed due to version mismatch:
    npm install --legacy-peer-deps
    ```

3. **Start the development server:**
    * **Using npm:**
        ```bash
        npm start
        ```
    * **Using Angular CLI:**
        ```bash
        ng serve --open
        ```
    The app will run at http://localhost:4200/.
