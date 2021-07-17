import React, { ReactElement } from 'react';
import { useActiveRouteIndex } from '../../hooks/UseActiveRouteIndex';
import { Button, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { MobileTab } from './MobileTab';

export function MobileNavigationButtons(): ReactElement {
    const activeRouteIndex = useActiveRouteIndex();

    return (
        <Menu>
            <MenuButton as={Button}>
                <HamburgerIcon />
            </MenuButton>
            <MenuList>
                <MobileTab href='/' active={activeRouteIndex === 0} marginRight={2}>
                    Me
                </MobileTab>
                <MobileTab href='/education' active={activeRouteIndex === 1} marginRight={2}>
                    Education
                </MobileTab>
                <MobileTab href='/experience' active={activeRouteIndex === 2}>
                    Experience
                </MobileTab>
            </MenuList>
        </Menu>
    );
}
