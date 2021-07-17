import { ReactElement } from 'react';
import { useColorMode, Button, Icon } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export function ColorModeToggle(): ReactElement {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Button onClick={toggleColorMode}>
            <Icon as={colorMode === 'light' ? FaMoon : FaSun} />
        </Button>
    );
}
