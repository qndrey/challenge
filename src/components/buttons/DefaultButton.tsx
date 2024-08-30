import React from 'react';

type DefaultButtonProps = {
    label: string;
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({
    label,
    onClick,
    disabled = false,
    type = 'button',
}) => {
    return (
        <button
            className={'button'}
            disabled={disabled}
            type={type}
            onClick={(event) => onClick && onClick(event)}>
            {label}
        </button>
    );
};

export default DefaultButton;