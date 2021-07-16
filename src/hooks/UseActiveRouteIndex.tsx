import { useRouter } from 'next/router';

const routes = ['/', '/education', 'work_experience'];

export function useActiveRouteIndex(): number {
    const router = useRouter();
    return routes.findIndex((value) => value === router.pathname);
}
