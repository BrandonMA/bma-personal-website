import { Box, BoxProps, Button, useTheme } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { ReactElement, useCallback } from 'react';
import { useTabColor } from '../hooks/colors/useTabColor';

interface Props extends BoxProps {
    href: string;
    active: boolean;
    children: string;
}

export function Tab({ href, active, children, ...others }: Props): ReactElement {
    const theme = useTheme();
    const router = useRouter();
    const tabColor = useTabColor();

    const navigateToRoute = useCallback(() => {
        router.push(href);
    }, [href, router]);

    return (
        <Box {...others}>
            <Button onClick={navigateToRoute} backgroundColor={active ? tabColor : undefined} variant='ghost' colorScheme='blue'>
                {children}
            </Button>
        </Box>
    );
}
