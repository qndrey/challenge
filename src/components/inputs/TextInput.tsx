import React, { useState, useEffect, useRef } from 'react';
import useDebounce from '../../hooks/useDebounce';

interface TextInputProps {
    placeholder?: string;
    minInput?: number;
    maxInput?: number;
    autoFocus?: boolean;
    type: 'string' | 'number' | 'checkbox';
    value: string | number | boolean;
    onChange: (value: string | number | boolean) => void;
}

const TextInput: React.FC<TextInputProps> = ({
    type,
    autoFocus = false,
    placeholder,
    minInput,
    maxInput,
    value,
    onChange,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [text, setText] = useState<string | number | boolean>(value);
    const debouncedValue = useDebounce(text, 300);
    const prevDebouncedValueRef = useRef(debouncedValue);

    useEffect(() => {
        setText(value);
    }, [value]);


    useEffect(() => {
        // Only call onChange if the debouncedValue has changed
        if (debouncedValue !== prevDebouncedValueRef.current) {
            onChange(debouncedValue);
            prevDebouncedValueRef.current = debouncedValue; 
        }
    }, [debouncedValue, onChange]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = type === 'checkbox'
            ? e.target.checked
            : (type === 'number' ? Number(e.target.value) : e.target.value);
        setText(inputValue);
    };

    return (
        <input
            ref={inputRef}
            autoFocus={autoFocus}
            placeholder={placeholder}
            min={minInput}
            max={maxInput}
            type={type}
            checked={type === 'checkbox' && (value as boolean)}
            onChange={handleChange}
            value={type !== 'checkbox' ? (text as string | number) : undefined}
        />
    );
};

export default TextInput;
