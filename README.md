# Push Notification App

## Project Overview

This project is a frontend assignment for DiGiLABS, developed using Next.js. It includes:

- UI implementation based on the provided [Figma design](https://www.figma.com/design/C6mcqwKcHhnars9zcZpSop/Assignment-Round-%E2%80%A2-DiGiLABS?node-id=0-1&t=wzZro7IExxTsJCLl-1)
- PWA setup using `next-pwa`
- Push notification functionality triggered by a button
- Styled with raw CSS (no frameworks)

## Installation & Setup

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```
2. Install dependencies:
   ```bash
   npm install  # or yarn install
   ```
3. Run the development server:
   ```bash
   npm run dev  # or yarn dev
   ```
4. Build for production:
   ```bash
   npm run build
   npm run start
   ```

## PWA & Push Notifications

- `next-pwa` is used for PWA setup.
- Web Push API is used for notifications triggered by a button.
