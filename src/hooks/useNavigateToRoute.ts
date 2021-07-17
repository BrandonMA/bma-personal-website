import { useCallback } from 'react';
import { useRouter } from 'next/router';

export function useNavigateToRoute(href: string): () => void {
    const router = useRouter();

    return useCallback(async () => {
        try {
            await router.push(href);
        } catch (error) {
            alert(error.message);
        }
    }, [href, router]);
}
