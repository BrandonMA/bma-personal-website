import React, { ReactElement } from 'react';
import { ChakraProvider, ScaleFade, VStack } from '@chakra-ui/react';
import { NavigationBar } from '../../src/components/navigation/NavigationBar';
import { Background } from '../../src/components/Background';
import { Header } from '../../src/components/Header';
import { Schools } from '../../src/content/Schools';
import { CertificatesDescription } from '../../src/content/CertificatesDescription';
import { CertificatesList } from '../../src/content/CertificatesList';

export default function Education(): ReactElement {
    return (
        <ChakraProvider>
            <Header />
            <NavigationBar />
            <Background>
                <ScaleFade in>
                    <VStack spacing='48px' width='100%' alignItems='center' justifyContent='center' flexDirection='column' marginBottom={4}>
                        <Schools />
                        <CertificatesDescription />
                        <CertificatesList />
                    </VStack>
                </ScaleFade>
            </Background>
        </ChakraProvider>
    );
}
