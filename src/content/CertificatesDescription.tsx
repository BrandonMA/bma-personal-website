import React, { ReactElement } from 'react';
import { Container, Heading, Text, VStack } from '@chakra-ui/react';

export function CertificatesDescription(): ReactElement {
    return (
        <Container>
            <VStack spacing='12px'>
                <Heading textAlign='center' size='lg'>
                    Certificates
                </Heading>
                <Text textAlign='center'>
                    I definitely believe that more certifications do not make you a better developer, that being said, they look cool and
                    you can display them nicely for some eye-candy.
                </Text>
            </VStack>
        </Container>
    );
}
