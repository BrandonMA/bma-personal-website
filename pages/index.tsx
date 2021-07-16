import React from 'react';
import { ChakraProvider, ScaleFade, VStack } from '@chakra-ui/react';
import { NavigationBar } from '../src/components/NavigationBar';
import { Background } from '../src/components/Background';
import { Contact } from '../src/content/Contact';
import { AboutMe } from '../src/content/AboutMe';
import { Skills } from '../src/content/Skills';
import { Header } from '../src/components/Header';

export default function Home() {
    return (
        <ChakraProvider>
            <Header />
            <NavigationBar />
            <Background>
                <ScaleFade in>
                    <VStack spacing='48px' width='100%' alignItems='center' justifyContent='center' flexDirection='column' marginBottom={4}>
                        <Contact />
                        <AboutMe />
                        <Skills />
                    </VStack>
                </ScaleFade>
            </Background>
        </ChakraProvider>
    );
}
