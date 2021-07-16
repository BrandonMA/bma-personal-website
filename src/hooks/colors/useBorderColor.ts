import { useColorModeValue, useTheme } from '@chakra-ui/react';

export function useBorderColor(): string {
    const theme = useTheme();
    return useColorModeValue(theme.colors.gray['100'], theme.colors.gray['700']);
}
