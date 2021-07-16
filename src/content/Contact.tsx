import { Box, Button, Heading, Text, Container, VStack, Link } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { ProfilePicture } from '../components/ProfilePicture';
import { Hello } from '../components/Hello';

export function Contact(): ReactElement {
    return (
        <VStack spacing='24px' justifyContent='center' flexDirection='column' alignItems='center'>
            <Box>
                <ProfilePicture size='2xl' />
            </Box>
            <Container>
                <VStack spacing='12px'>
                    <Heading textAlign='center' size='lg'>
                        <Hello />
                        Hi! My name is Brandon
                    </Heading>
                    <Text textAlign='center'>
                        I am a biligual software engineer (Spanish / English) living in San Luis Potosi, Mexico. Specializing in building
                        and designing <b>websites</b> and <b>applications</b> mainly by using <b>React & React Native</b> but also able to
                        develop on native platforms with <b>Swift</b> and <b>Kotlin</b>. I focus on building responsive and minimal
                        interfaces that bring value to companies and users.
                    </Text>
                </VStack>
            </Container>
            <Link href={'mailto:brandonma98@protonmail.com'}>
                <Button borderRadius={20} colorScheme='orange'>
                    Contact me
                </Button>
            </Link>
        </VStack>
    );
}
