import { ButtonProps, MenuItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { ReactElement, useCallback } from 'react';
import { useTabColor } from '../hooks/colors/useTabColor';

interface Props extends ButtonProps {
    href: string;
    active: boolean;
    children: string;
}

export function MobileTab({ href, active, children, ...others }: Props): ReactElement {
    const router = useRouter();
    const tabColor = useTabColor();

    const navigateToRoute = useCallback(() => {
        router.push(href);
    }, [href, router]);

    return (
        <MenuItem {...others} onClick={navigateToRoute} backgroundColor={active ? tabColor : undefined} variant='ghost' colorScheme='blue'>
            {children}
        </MenuItem>
    );
}
