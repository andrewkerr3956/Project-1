import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<any> {};

export default function Button(props: ButtonProps) {
    const { children, ...restProps } = props;

    return (
        <button {...restProps}>
            {children}
        </button>
    )
}