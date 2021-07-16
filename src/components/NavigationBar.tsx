import { Button, Flex, Link, useTheme } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { useForegroundColor } from '../hooks/colors/useForegroundColor';
import { useBorderColor } from '../hooks/colors/useBorderColor';
import { Tab } from './Tab';
import { useActiveRouteIndex } from '../hooks/UseActiveRouteIndex';

export function NavigationBar(): ReactElement {
    const foregroundColor = useForegroundColor();
    const borderColor = useBorderColor();
    const theme = useTheme();
    const activeRouteIndex = useActiveRouteIndex();

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
                    <Link target='_blank' download href={'https://www.icloud.com/iclouddrive/0edmzNNEEIPIOCWASka171UAw#CV'}>
                        <Button>Resume</Button>
                    </Link>
                </Flex>
                <Flex flex={1} flexDirection='row' />
                <Flex flexDirection='row'>
                    <Tab href='/' active={activeRouteIndex === 0} marginRight={2}>
                        Me
                    </Tab>
                    <Tab href='/education' active={activeRouteIndex === 1} marginRight={2}>
                        Education
                    </Tab>
                    <Tab href='/work_experience' active={activeRouteIndex === 2}>
                        Experience
                    </Tab>
                </Flex>
            </Flex>
            <Flex backgroundColor='red' height={'64px'} width='100%' flexShrink={0} />
        </>
    );
}
