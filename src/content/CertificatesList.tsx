import { ReactElement } from 'react';
import { WrapImage } from '../components/WrapImage';
import { certificates } from './data/certificates';
import { Wrap } from '@chakra-ui/react';

export function CertificatesList(): ReactElement {
    return (
        <Wrap justify={'center'} spacing={'36px'}>
            {certificates.map((certificate) => (
                <WrapImage key={certificate} certificate={certificate} />
            ))}
        </Wrap>
    );
}
