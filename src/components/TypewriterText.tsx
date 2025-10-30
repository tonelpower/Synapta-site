import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export default function TypewriterText({
  text,
  delay = 0,
  speed = 80,
  className = ''
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      const cursorTimeout = setTimeout(() => {
        setShowCursor(false);
      }, 500);

      return () => clearTimeout(cursorTimeout);
    }
  }, [currentIndex, text, isStarted, speed]);

  useEffect(() => {
    if (!isStarted) return;

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [isStarted]);

  return (
    <span className={className}>
      {displayedText}
      {isStarted && (
        <span
          className={`inline-block w-[3px] h-[0.9em] bg-white ml-[2px] align-middle ${
            showCursor ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transition: 'opacity 0.1s' }}
        />
      )}
    </span>
  );
}
