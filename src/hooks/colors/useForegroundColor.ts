import { useColorModeValue, useTheme } from '@chakra-ui/react';

export function useForegroundColor(): string {
    const theme = useTheme();
    return useColorModeValue(theme.colors.white, theme.colors.gray['900']);
}
