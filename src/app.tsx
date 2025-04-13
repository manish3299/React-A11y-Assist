import { useRTL } from './hooks/useRTL';
import { useVoiceCommands } from './hooks/useVoiceCommands';

function App() {
  const { isRTL, toggleRTL } = useRTL();
  useVoiceCommands();

  return (
    <div className="container">
      <h1>React A11Y v1.0</h1>
      <button onClick={toggleRTL}>{isRTL ? 'Switch to LTR' : 'Switch to RTL'}</button>
      <p>
        This demonstration now supports voice commands. Try saying "increase font size" or "reset
        font size".
      </p>
      <section>
        <h2>Chrome DevTools Extension</h2>
        <p>
          A basic Chrome DevTools extension has been added. Open Chrome DevTools and look for the
          "React A11Y DevTools" tab to inspect accessibility information.
        </p>
      </section>
    </div>
  );
}

export default App;
