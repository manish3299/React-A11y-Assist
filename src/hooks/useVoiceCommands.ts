import { useEffect } from 'react';

export function useVoiceCommands() {
  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn('Speech Recognition API is not supported in this browser.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event: any) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      transcript = transcript.trim().toLowerCase();
      console.log('Voice Command:', transcript);

      if (transcript.includes('increase font size')) {
        document.body.style.fontSize = 'larger';
      } else if (transcript.includes('reset font size')) {
        document.body.style.fontSize = '';
      }
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
    };

    recognition.start();

    // Clean up when component unmounts
    return () => {
      recognition.stop();
    };
  }, []);
}
