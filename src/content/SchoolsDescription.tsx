import React, { ReactElement } from 'react';
import { Container, Heading, Text, VStack } from '@chakra-ui/react';

export function SchoolsDescription(): ReactElement {
    return (
        <Container>
            <VStack spacing='12px'>
                <Heading textAlign='center' size='lg'>
                    Education
                </Heading>
                <Text textAlign='center'>
                    I have been studying for a bit over 5 years, I dropped school one year to work in the Netherlands but decided to finish
                    my Bachelor as I already spent a lot of time doing it so I might as well finish it. That being said, I had the
                    opportunity to go to a few countries and see multiple cultures apart from mine, so I consider myself a person that is
                    able to adapt really quickly, in general I love to travel and go to new countries so any job that provides me this
                    opportunity would be incredible for me.
                </Text>
                <Text textAlign={'center'}>
                    <b>I am planning to graduate this December 😄</b>
                </Text>
            </VStack>
        </Container>
    );
}
