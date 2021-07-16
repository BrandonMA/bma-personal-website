import React, { ReactElement } from 'react';
import { ChakraProvider, ScaleFade, VStack } from '@chakra-ui/react';
import { NavigationBar } from '../../src/components/NavigationBar';
import { Background } from '../../src/components/Background';
import { Header } from '../../src/components/Header';
import { SchoolsDescription } from '../../src/content/SchoolsDescription';
import { Schools } from '../../src/content/Schools';
import { CertificatesDescription } from '../../src/content/CertificatesDescription';
import Image from 'next/image';

export default function Education(): ReactElement {
    return (
        <ChakraProvider>
            <Header />
            <NavigationBar />
            <Background>
                <ScaleFade in>
                    <VStack spacing='48px' width='100%' alignItems='center' justifyContent='center' flexDirection='column' marginBottom={4}>
                        <SchoolsDescription />
                        <Schools />
                        <CertificatesDescription />
                        <Image src={'/image-certificates/diploma-bd.png'} alt={'Diploma Bases de Datos'} height={128} width={128} />
                    </VStack>
                </ScaleFade>
            </Background>
        </ChakraProvider>
    );
}
