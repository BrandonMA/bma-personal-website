import React, { ReactElement } from 'react';
import { ChakraProvider, ScaleFade, VStack } from '@chakra-ui/react';
import { NavigationBar } from '../../src/components/NavigationBar';
import { Background } from '../../src/components/Background';
import { Header } from '../../src/components/Header';
import { GitHub } from '../../src/content/GitHub';
import { WorkDescription } from '../../src/content/WorkDescription';
import { JobsList } from '../../src/content/JobsList';

export default function Experience(): ReactElement {
    return (
        <ChakraProvider>
            <Header />
            <NavigationBar />
            <Background>
                <ScaleFade in>
                    <VStack spacing='48px' width='100%' alignItems='center' justifyContent='center' flexDirection='column' marginBottom={4}>
                        <GitHub />
                        <WorkDescription />
                        <JobsList />
                    </VStack>
                </ScaleFade>
            </Background>
        </ChakraProvider>
    );
}
