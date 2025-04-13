import { useEffect } from 'react';

export function useKeyboardNavigation(callback: (event: KeyboardEvent) => void) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        callback(event);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [callback]);
}
