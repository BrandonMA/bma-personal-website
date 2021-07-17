import { MenuItem, MenuItemProps } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { useTabColor } from '../../hooks/colors/useTabColor';
import { useNavigateToRoute } from '../../hooks/useNavigateToRoute';

interface Props extends MenuItemProps {
    href: string;
    active: boolean;
    children: string;
}

export function MobileTab({ href, active, children, ...others }: Props): ReactElement {
    const tabColor = useTabColor();
    const navigateToRoute = useNavigateToRoute(href);

    return (
        <MenuItem {...others} onClick={navigateToRoute} backgroundColor={active ? tabColor : 'transparent'} variant='ghost'>
            {children}
        </MenuItem>
    );
}
