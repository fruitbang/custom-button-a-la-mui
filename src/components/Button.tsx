import { FC, SyntheticEvent } from 'react';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import defaultTheme, { Theme } from './defaultTheme';

interface ButtonProps {
    theme?: Theme;
    classes?: string;
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    disabled?: boolean;
    variant?: 'contained' | 'outlined' | 'text';
    size?: string;
    innerText?: string;
    onClick?: (e: any) => any | void;
}

const StyledButton = styled.button<ButtonProps>`
    display-inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 1em;
    font-weight: 600;
    font-family: inherit;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
    color: ${(props) =>
        props.disabled
            ? props.theme.colors.disabled
            : props.variant === 'contained'
                ? 'inherit'
                : props.theme.colors[props.color ?? 'primary']};
    background-color: ${(props) =>
        props.variant === 'contained'
        ? props.disabled
            ? props.theme.colors.disabled
            : props.theme.colors[props.color ?? 'primary']
        : props.theme.colors.invisible};
    border: ${(props) =>
        props.variant === 'text' ? '1px solid transparent' : `1px solid`};
    border-color: ${(props) => {
        switch (props.variant) {
            case 'contained':
                return props.disabled
                    ? props.theme.colors.invisible
                    : props.theme.colors[props.color ?? 'primary'];
            case 'outlined':
                return 'inherit';
            case 'text':
                return 'transparent';
            default:
                return 'transparent';
        }
    }};
    padding: ${(props) => {
        switch (props.size) {
            case 'large':
                return props.theme.sizes.large;
            case 'medium':
                return props.theme.sizes.medium;
            case 'small':
                return props.theme.sizes.small;
            default:
                return props.theme.sizes.large;
        }
    }};
    transition: opacity 0.8s;
    &:hover {
        opacity: 0.9;
    };
`;

const Button: FC<ButtonProps> = ({
    theme,
    innerText = 'Hello',
    color = 'primary',
    disabled = false,
    variant = 'contained',
    ...rest
}) => {
    return (
        <ThemeProvider theme={theme ?? defaultTheme}>
            <StyledButton variant={variant} color={color} disabled={disabled} {...rest}>
                {innerText ?? null}
            </StyledButton>
        </ThemeProvider>
    );
};

export default Button;
