import { Button, ButtonProps } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { useTabColor } from '../../hooks/colors/useTabColor';
import { useNavigateToRoute } from '../../hooks/useNavigateToRoute';

interface Props extends ButtonProps {
    href: string;
    active: boolean;
    children: string;
}

export function DesktopTab({ href, active, children, ...others }: Props): ReactElement {
    const tabColor = useTabColor();
    const navigateToRoute = useNavigateToRoute(href);

    return (
        <Button {...others} onClick={navigateToRoute} backgroundColor={active ? tabColor : undefined} variant='ghost' colorScheme='blue'>
            {children}
        </Button>
    );
}
