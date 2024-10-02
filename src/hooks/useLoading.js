import { useState, useEffect } from 'react';

function useLoading(duration = 4000) {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const intervalDuration = duration / 100;
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(timer);
                    setLoading(false);
                    return 100;
                }
            });
        }, intervalDuration);

        return () => clearInterval(timer);
    }, [duration]);

    return { loading, progress };
}

export default useLoading;