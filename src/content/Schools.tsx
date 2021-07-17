import React, { ReactElement } from 'react';
import { WrapInstitution } from '../components/WrapItems/WrapInstitution';
import { Wrap } from '@chakra-ui/react';

export function Schools(): ReactElement {
    return (
        <Wrap justify={'center'}>
            <WrapInstitution schoolHref={'https://tec.mx/es'} description={'Business Informatics'} date={'2016 - 2021'} image={'tec.jfif'}>
                Tecnológico de Monterrey
            </WrapInstitution>
            <WrapInstitution
                schoolHref={'https://www.ajou.ac.kr/en/index.do'}
                description={'Computer Science'}
                date={'2021 Spring Semester'}
                image={'/ajou.png'}
            >
                Ajou University
            </WrapInstitution>
            <WrapInstitution
                schoolHref={'https://www.ajou.ac.kr/en/index.do'}
                description={'Global Management'}
                date={'2018 - 2019 Full Year'}
                image={'/bremen.jfif'}
            >
                Hochschule Bremen
            </WrapInstitution>
            <WrapInstitution
                schoolHref={'https://www.cvut.cz/en'}
                description={'Artificial Intelligence'}
                date={'2018 Summer'}
                image={'/prague.jfif'}
            >
                Czech technical university in Prague
            </WrapInstitution>
            <WrapInstitution
                schoolHref={'https://www.ece.fr/ecole-ingenieur/'}
                description={'Computer Systems Technology'}
                date={'2017 Summer'}
                image={'/ece.png'}
            >
                ECE Paris
            </WrapInstitution>
        </Wrap>
    );
}
