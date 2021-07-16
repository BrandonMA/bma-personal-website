import { ReactElement, useCallback, useState } from 'react';
import Image from 'next/image';
import { WrapItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface Props {
    certificate: string;
}

const variants = {
    loading: { scale: 0, opacity: 0, borderRadius: 0 },
    loaded: { scale: 1, opacity: 1, borderRadius: 8 }
};

export function WrapImage({ certificate }: Props): ReactElement {
    const [loaded, setLoaded] = useState(false);
    const setLoadedActive = useCallback((event) => {
        if (event.target.src.indexOf('data:image/gif;base64') < 0) {
            setLoaded(true);
        }
    }, []);

    return (
        <WrapItem>
            <motion.div
                variants={variants}
                initial={'loading'}
                animate={loaded ? 'loaded' : 'loading'}
                transition={{ duration: 0.6, type: 'spring' }}
                style={{ overflow: 'hidden', width: 256, height: 198 }}
            >
                <Image onLoad={setLoadedActive} alt={'Certificate'} width={256} height={198} src={`/image-certificates/${certificate}`} />
            </motion.div>
        </WrapItem>
    );
}
