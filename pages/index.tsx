import React from 'react';
import { ChakraProvider, ScaleFade, VStack } from '@chakra-ui/react';
import { NavigationBar } from '../src/components/navigation/NavigationBar';
import { Background } from '../src/components/Background';
import { ContactMeDescription } from '../src/content/ContactMeDescription';
import { AboutMeDescription } from '../src/content/AboutMeDescription';
import { Skills } from '../src/content/Skills';
import { Header } from '../src/components/Header';
import { ProfilePicture } from '../src/components/ProfilePicture';

export default function Home() {
    return (
        <ChakraProvider>
            <Header />
            <NavigationBar />
            <Background>
                <ScaleFade in>
                    <VStack spacing='24px' width='100%' alignItems='center' justifyContent='center' flexDirection='column'>
                        <ProfilePicture size='2xl' />
                        <ContactMeDescription />
                        <AboutMeDescription />
                        <Skills />
                    </VStack>
                </ScaleFade>
            </Background>
        </ChakraProvider>
    );
}
