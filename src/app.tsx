import { useRTL } from "./hooks/useRTL";

function App() {
  const { isRTL, toggleRTL } = useRTL();

  return (
    <div className="container">
      <h1>React A11Y v0.4</h1>
      <button onClick={toggleRTL}>
        {isRTL ? "Switch to LTR" : "Switch to RTL"}
      </button>
      <p>
        This text demonstrates RTL support. When RTL is enabled, the layout and
        text alignment will change.
      </p>
      <section>
        <h2>Lighthouse A11Y Audit</h2>
        <p>
          To audit this page for accessibility, open Chrome DevTools, go to the
          Lighthouse tab, and run an audit selecting the "Accessibility"
          category.
        </p>
      </section>
    </div>
  );
}

export default App;
