import React, { ReactElement } from 'react';
import { WrapInstitution } from '../components/WrapItems/WrapInstitution';
import { Wrap } from '@chakra-ui/react';

export function JobsList(): ReactElement {
    return (
        <Wrap justify={'center'}>
            <WrapInstitution
                schoolHref={'https://www.lachispaincubadora.com/'}
                description={'Web App'}
                date={'2021'}
                image={'/chispa.jpeg'}
            >
                La Chispa Incubadora
            </WrapInstitution>
            <WrapInstitution schoolHref={'https://chiff.app/'} description={'Password Manager'} date={'2019 - 2020'} image={'/chiff.png'}>
                Chiff
            </WrapInstitution>
            <WrapInstitution
                schoolHref={'https://www.contact-software.com/de/'}
                description={'UI Library'}
                date={'2018 - 2019'}
                image={'/contact.png'}
            >
                Contact Software
            </WrapInstitution>
        </Wrap>
    );
}
