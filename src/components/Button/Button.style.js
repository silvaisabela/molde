import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';

const baseButton = {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 10,
    elevation: 3,
    width: 300,
}

const ButtonStyles = StyleSheet.create({
    button: {
        ...baseButton,
        backgroundColor: theme.color.primary,
    },
    buttonSecondary: {
        ...baseButton,
        backgroundColor: theme.color.secondary,
    },
    buttonTertiary: {
        ...baseButton,
        backgroundColor: theme.color.tertiary,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: theme.fontWeight.regular,
        letterSpacing: 0.25,
        color: theme.fontColor.primary,
    },
});

export { ButtonStyles }