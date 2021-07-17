import React, { ReactElement } from 'react';
import { useActiveRouteIndex } from '../../hooks/UseActiveRouteIndex';
import { Flex } from '@chakra-ui/react';
import { DesktopTab } from './DesktopTab';

export function DesktopNavigationButtons(): ReactElement {
    const activeRouteIndex = useActiveRouteIndex();

    return (
        <Flex flexDirection='row'>
            <DesktopTab href='/' active={activeRouteIndex === 0} marginRight={2}>
                Me
            </DesktopTab>
            <DesktopTab href='/education' active={activeRouteIndex === 1} marginRight={2}>
                Education
            </DesktopTab>
            <DesktopTab href='/experience' active={activeRouteIndex === 2}>
                Experience
            </DesktopTab>
        </Flex>
    );
}
