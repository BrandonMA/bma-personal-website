import { Button, Flex, Link, Menu, MenuButton, MenuItem, MenuList, useBreakpointValue, useTheme } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { useForegroundColor } from '../hooks/colors/useForegroundColor';
import { useBorderColor } from '../hooks/colors/useBorderColor';
import { DesktopTab } from './DesktopTab';
import { useActiveRouteIndex } from '../hooks/UseActiveRouteIndex';
import { GitHubButton } from './Buttons/GitHubButton';
import { TwitterButton } from './Buttons/TwitterButton';
import { LinkedInButton } from './Buttons/LinkedInButton';
import { HamburgerIcon } from '@chakra-ui/icons';
import { MobileTab } from './MobileTab';
import { useBackgroundColor } from '../hooks/colors/useBackgroundColor';

function DesktopNavigationButtons(): ReactElement {
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

function MobileNavigationButtons(): ReactElement {
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

export function NavigationBar(): ReactElement {
    const foregroundColor = useForegroundColor();
    const backgroundColor = useBackgroundColor();
    const borderColor = useBorderColor();
    const theme = useTheme();
    const navigationType = useBreakpointValue({ base: 'mobile', md: 'desktop' });

    return (
        <>
            <Flex
                padding={theme.space['2']}
                height={theme.space['16']}
                width='100%'
                backgroundColor={foregroundColor}
                borderBottomColor={borderColor}
                borderBottomWidth={'1px'}
                flexDirection='row'
                alignItems='center'
                position='fixed'
                zIndex={1000}
            >
                <Flex flexDirection='row'>
                    <Link marginRight={2} target='_blank' download href={'https://www.icloud.com/iclouddrive/0edmzNNEEIPIOCWASka171UAw#CV'}>
                        <Button>CV</Button>
                    </Link>
                    <GitHubButton marginRight={2} />
                    <TwitterButton marginRight={2} />
                    <LinkedInButton />
                </Flex>
                <Flex flex={1} flexDirection='row' />
                {navigationType === 'desktop' ? <DesktopNavigationButtons /> : <MobileNavigationButtons />}
            </Flex>
            <Flex backgroundColor={backgroundColor} height={'64px'} width='100%' flexShrink={0} />
        </>
    );
}
