import React, { ReactElement } from 'react';
import { Container, Heading, Text, VStack } from '@chakra-ui/react';

export function WorkDescription(): ReactElement {
    return (
        <Container>
            <VStack spacing='12px'>
                <Heading textAlign='center' size='lg'>
                    Work
                </Heading>
                <Text textAlign='center'>
                    Here are the companies I had the opportunity to work with in the past. I am still working on adding my freelance work to
                    this section but feel free to contact me for more information.
                </Text>
            </VStack>
        </Container>
    );
}
