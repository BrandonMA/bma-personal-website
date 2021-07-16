import { useColorModeValue, useTheme } from '@chakra-ui/react';

export function useBackgroundColor(): string {
    const theme = useTheme();
    return useColorModeValue(theme.colors.gray['50'], theme.colors.gray['800']);
}
