# React-a11y-assist

**Developer-first accessibility toolkit for React**

Make your apps more inclusive with accessible components, hooks, and voice interaction support — all in one lightweight library.

[![npm version](https://img.shields.io/npm/v/react-a11y-assist.svg)](https://www.npmjs.com/package/react-a11y-assist)

[![Discuss on GitHub](https://img.shields.io/badge/Discuss-GitHub%20Discussions-blue?logo=github)](https://github.com/manish3299/React-A11y-Assist/discussions)


[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[![Build](https://img.shields.io/github/workflow/status/manish3299/react-a11y-assist/CI)](https://github.com/manish3299/react-a11y-assist/actions)

---





## 🚀 Quick Start

Install the package:

```bash
npm install react-a11y-assist
```

Or

```bash
yarn add react-a11y-assist


```

# ✨ Features by Version

**Version Features**

**v0.1** - _Higher-Order Components (HOC) like withA11y for semantic accessibility_

**v0.2** - _Hooks: useKeyboardNavigation, useRTL for enhanced keyboard support_

**v0.3** - _Accessible UI components like Modal, AccessibleButton_

**v0.4** - _RTL support & automated Lighthouse a11y audit hooks_

**v1.0** - _Voice command interaction via Web Speech API + Chrome DevTools Extension_





## 🌟 Why react-a11y-assist?

**Your zero-setup accessibility companion for React.**

_React-a11y-assist isn't just another UI library — it’s a toolkit designed for real-world accessibility baked right into your components, hooks, and dev workflow._

Here's what sets it apart:

✅ **No dependencies** – Works out of the box with your existing React app

✅ **Voice command support** – Integrates with the Web Speech API for hands-free navigation

✅ **Developer-first DX** – Lightweight, TypeScript-native, and tree-shakable

✅ **Lighthouse-Ready** – Helps pass accessibility audits with minimal effort

✅ **RTL Support** – Right-to-left layouts with just one hook

✅ **HOCs + Hooks + Components** – Flexible APIs to match your coding style

✅ **DevTools Friendly** – Built for future integration with Chrome Extensions

✅ **Open-source & Extensible** – MIT licensed, easily customizable, and community-driven





## 📦 Usage Examples

**1. Wrapping components with withA11y HOC**

```javascript
import withA11y from "react-a11y-assist/hocs/withA11y";

const AccessibleSection = withA11y("section");

export default function App() {
  return (
    <AccessibleSection aria-label="Profile">
      <h1>Hello World</h1>
    </AccessibleSection>
  );
}
```



**2. Managing focus with useKeyboardNavigation**

```javascript
import { useRef } from "react";
import useKeyboardNavigation from "react-a11y-assist/hooks/useKeyboardNavigation";

export default function Menu() {
  const listRef = useRef < HTMLUListElement > null;
  useKeyboardNavigation(listRef);

  return (
    <ul ref={listRef}>
      <li tabIndex={0}>Home</li>
      <li tabIndex={0}>About</li>
      <li tabIndex={0}>Contact</li>
    </ul>
  );
}
```




**3. Using the Modal Component**

```javascript
import Modal from "react-a11y-assist/components/Modal";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>Accessible Modal</h2>
        <p>This modal traps focus and supports ESC close.</p>
      </Modal>
    </>
  );
}
```




**4. Accessible Button**

```javascript
import AccessibleButton from "react-a11y-assist/components/AccessibleButton";

export default function ButtonDemo() {
  return (
    <AccessibleButton onClick={() => alert("Clicked!")}>
      Click Me
    </AccessibleButton>
  );
}
```




**5. Voice Commands with useVoiceCommands**

```javascript
import useVoiceCommands from "react-a11y-assist/hooks/useVoiceCommands";

export default function VoiceDemo() {
  useVoiceCommands({
    hello: () => alert("Hello there!"),
    goodbye: () => alert("Goodbye!"),
  });

  return <p>Say "hello" or "goodbye" to trigger commands</p>;
}
```




## 🧪 Testing

React-A11y-Assist is tested with Vitest and React Testing Library.

```bash
npm run test

```




# 🤝 Contributing

**We 💙 contributions!**

**1. Fork the repo**

**2. Create a branch**

```bash
 git checkout -b feature/my-feature

```

**3. Commit your changes**

```bash
git commit -m "feat: add new feature"
```

**4. Push to GitHub**

```bash
git push origin feature/my-feature
```

**5. Open a Pull Request 🚀**




## 📄 License

**MIT ©** [@manish3299](https://github.com/manish3299)



**Built with 💙 to make the web more inclusive.**
