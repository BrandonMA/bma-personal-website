import { Container, Heading, Text, VStack } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

export function AboutMe(): ReactElement {
    return (
        <Container>
            <VStack spacing='12px'>
                <Heading textAlign='center' size='md'>
                    About Me
                </Heading>
                <Text textAlign='center'>
                    I enjoy working with new technologies and specially creating reusable code that other people can use on their projects.
                    I am currently attending my last semester at Tec de Monterrey. My major in Business and Information Technologies gave me
                    the knowledge to build software projects that require project management, prototyping and an excelent code quality
                    without losing the focus on the business perspective.
                </Text>
            </VStack>
        </Container>
    );
}
