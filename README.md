# Ilm Portal Mobile App

![Ilm Portal Desktop View](public/screenshots/screenshot-desktop.png)

A modern Progressive Web App (PWA) built with Vue 3, Ionic, and Capacitor for Quranic learning and madrassa management.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📱 Development Commands

### Basic Development
```bash
npm run dev              # Start development server (Vite)
npm run build            # Build for production
npm run preview          # Preview production build
```

### Testing
```bash
npm run test:unit        # Run unit tests (Vitest)
npm run test:e2e         # Run end-to-end tests (Cypress)
npm run lint             # Run ESLint
```

## 🎨 Asset Generation

### PWA Assets (Web)
```bash
npm run generate:pwa-assets    # Generate PWA icons, splash screens, and manifest
```

### Native Assets (Mobile)
```bash
npm run generate:android-assets    # Generate Android icons and splash screens
npm run generate:ios-assets        # Generate iOS icons and splash screens
```

## 🔨 Build Commands

### Cross-Platform Builds

#### Windows (PowerShell)
```bash
npm run build:android:win    # Build Android APK (Windows)
npm run build:web:win        # Build and deploy web app (Windows)
```

#### Linux/Mac (Bash)
```bash
npm run build:android        # Build Android APK (Linux/Mac)
npm run build:web            # Build and deploy web app (Linux/Mac)
```

### Build Process Details

#### Android Build (`build:android` / `build:android:win`)
1. Builds the web app (`npm run build`)
2. Syncs changes to Android (`npx cap sync android`)
3. Builds Android APK (`./gradlew assembleDebug`)
4. Copies APK to `public/app-debug.apk`
5. Shows APK size

#### Web Build (`build:web` / `build:web:win`)
1. Builds the web app (`npm run build`)
2. Copies `index.html` to `404.html` (for GitHub Pages)
3. Copies `CNAME` file
4. Commits and pushes to `v1` branch
5. Deploys to GitHub Pages

## 📁 Project Structure

```
ilm_portal/mobile/
├── src/
│   ├── components/          # Reusable Vue components
│   ├── layouts/             # Layout components (Auth, Guest)
│   ├── views/               # Page components
│   ├── composables/         # Vue composables
│   ├── config/              # App configuration
│   └── router/              # Vue Router configuration
├── public/                  # Static assets
│   ├── screenshots/         # PWA screenshots
│   └── app-debug.apk        # Generated Android APK
├── android/                 # Android native project
├── build/                   # Build scripts
│   ├── android.sh          # Android build (Linux/Mac)
│   ├── android.ps1         # Android build (Windows)
│   ├── web.sh              # Web build (Linux/Mac)
│   └── web.ps1              # Web build (Windows)
└── assets/                  # Source assets for generation
```

## 🛠️ Technology Stack

- **Frontend**: Vue 3 + TypeScript
- **UI Framework**: Ionic Vue
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **PWA**: Vite PWA Plugin
- **Mobile**: Capacitor
- **Testing**: Vitest + Cypress
- **Linting**: ESLint

## 📱 PWA Features

- ✅ **Service Worker**: Offline functionality
- ✅ **Web Manifest**: App installation
- ✅ **Splash Screens**: iOS/Android splash screens
- ✅ **Icons**: Multiple sizes and formats
- ✅ **Screenshots**: Install prompt screenshots
- ✅ **Auto-update**: Service worker updates

## 🎨 Theme Configuration

The app uses a dark theme with teal accents:
- **Primary Color**: `#2dd4bf` (teal-400)
- **Background**: `#0f2e30` (dark theme)
- **Text Color**: `#fe9833` (orange accent)

## 📦 Dependencies

### Core Dependencies
- `@ionic/vue` - Ionic Vue components
- `vue` - Vue.js framework
- `pinia` - State management
- `vue-router` - Routing

### Capacitor Plugins
- `@capacitor/app` - App lifecycle
- `@capacitor/haptics` - Haptic feedback
- `@capacitor/keyboard` - Keyboard handling
- `@capacitor/status-bar` - Status bar control

### Development Tools
- `@capacitor/assets` - Asset generation
- `@vite-pwa/assets-generator` - PWA asset generation
- `vite-plugin-pwa` - PWA functionality
- `tailwindcss` - CSS framework

## 🚀 Deployment

### Web Deployment
The web build automatically deploys to GitHub Pages:
- Builds the app
- Copies necessary files for GitHub Pages
- Commits and pushes to `v1` branch
- Available at your GitHub Pages URL

### Android Deployment
The Android build creates a debug APK:
- Builds the web app
- Syncs to Android project
- Generates APK
- Copies to `public/app-debug.apk`

## 🔧 Configuration Files

- `capacitor.config.ts` - Capacitor configuration
- `pwa.config.ts` - PWA configuration
- `pwa-assets.config.ts` - PWA assets configuration
- `vite.config.ts` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration

## 📝 Scripts Reference

| Command | Description | Platform |
|---------|-------------|----------|
| `npm run dev` | Start development server | All |
| `npm run build` | Build for production | All |
| `npm run preview` | Preview production build | All |
| `npm run test:unit` | Run unit tests | All |
| `npm run test:e2e` | Run e2e tests | All |
| `npm run lint` | Run ESLint | All |
| `npm run generate:pwa-assets` | Generate PWA assets | All |
| `npm run generate:android-assets` | Generate Android assets | All |
| `npm run generate:ios-assets` | Generate iOS assets | All |
| `npm run build:android` | Build Android APK | Linux/Mac |
| `npm run build:android:win` | Build Android APK | Windows |
| `npm run build:web` | Build and deploy web | Linux/Mac |
| `npm run build:web:win` | Build and deploy web | Windows |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm run test:unit`
5. Run linting: `npm run lint`
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Ilm Portal** - Your companion in enhancing your Quranic learning journey.
