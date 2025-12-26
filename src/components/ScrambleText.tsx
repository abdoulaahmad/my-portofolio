import { useEffect, useState, useRef } from 'react';

interface ScrambleTextProps {
    text: string;
    className?: string;
    chars?: string;
    speed?: number;
    revealDelay?: number;
}

export const ScrambleText = ({
    text,
    className = "",
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
    speed = 50,
}: ScrambleTextProps) => {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const scramble = () => {
        let iteration = 0;

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(_prev =>
                text
                    .split("")
                    .map((_letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setDisplayText(text); // Ensure final text is exact
            }

            iteration += 1 / 3;
        }, speed);
    };

    useEffect(() => {
        // Initial delay before starting the scramble effect optionally, or start immediately
        // usually we want it to look stable then scramble, or scramble into existence.
        // Let's scramble into existence on mount.

        // Actually for a "scramble reveal", we start with random chars and resolve to text.
        // My logic above does exactly that: index < iteration reveals real text.

        scramble();

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [text]);

    return (
        <span
            className={className}
            onMouseEnter={scramble}
        >
            {displayText}
        </span>
    );
};
