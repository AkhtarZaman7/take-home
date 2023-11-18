import { useEffect, useState } from 'react';
import Head from 'next/head';

const TextToSpeech: React.FC<{ text: string }> = ({ text }) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] =
    useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    // Fetch available voices
    const availableVoices = window.speechSynthesis.getVoices();

    setSelectedVoice(availableVoices[1]);
  }, []);

  const speak = () => {
    if (!selectedVoice) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice;
    window.speechSynthesis.speak(utterance);
  };

  if (!selectedVoice) return null;
  return (
    <div>
      <button onClick={speak}>Speak</button>
    </div>
  );
};

export default TextToSpeech;
