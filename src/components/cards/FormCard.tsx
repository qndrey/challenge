import React, { useState } from 'react';
import { TextInput, DefaultButton } from '../../components';
import { FieldInput } from '../../types';

type FormCardProps = {
    title: string;
    config: FieldInput[];
};

const FormCard: React.FC<FormCardProps> = ({ title, config }) => {
    const [formData, setFormData] = useState<Record<string, any>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleInputChange = (name: string, value: string | number | boolean) => {
        setFormData(prev => ({ ...prev, [name]: value }));

        const error = validateField(name, value);
        if (!error) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validateField = (name: string, value: any) => {
        const field = config.find(input => input.label === name);
        let error = '';
        if (field) {
            if (field.required && !value) {
                error = `${field.label} is required`;
            } else if (field.type === 'number') {
                if (field.min !== undefined && value < field.min) {
                    error = `${field.label} must be at least ${field.min}`;
                }
                if (field.max !== undefined && value > field.max) {
                    error = `${field.label} must be at most ${field.max}`;
                }
            }
        }
        return error;
    };

    const validateForm = (): [boolean, Record<string, string>] => {
        let isValid = true;
        const newErrors: Record<string, string> = {};

        config?.forEach(input => {
            const error = validateField(input.label, formData[input.label]);
            if (error) {
                newErrors[input.label] = error;
                isValid = false;
            }
        });
        return [isValid, newErrors];
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const [isValid, newErrors] = validateForm();

        if (isValid) {
            console.log('Form submitted:', formData);
        } else {
            setErrors(newErrors);
        }
    };

    const renderContent = (input: FieldInput) => {
        if (input?.type === 'enum') {
            return (
                <select
                    onChange={e => handleInputChange(input.label, e.target.value)}
                    value={formData[input.label] || ''}>
                    <option value="">Select {input.label}</option>
                    {input?.options?.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            );
        } else {
            return (
                <TextInput
                    type={input.type}
                    minInput={input?.min}
                    maxInput={input?.max}
                    placeholder={input?.placeholder}
                    value={formData[input.label] || ''}
                    onChange={value => handleInputChange(input.label, value)}
                />
            );
        }
    }

    return (
        <div className='form'>
            <h2>{title}</h2>
            {config?.map((input: FieldInput, index) => (
                <div key={`${input?.label}-${index}`} className='input'>
                    <div>
                        <label>{input?.label} </label>
                        {renderContent(input)}
                    </div>
                    {errors[input.label] && (
                        <span className='error'>{errors[input.label]}</span>
                    )}
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <DefaultButton label='Save' type='submit'
                    className={validateForm()[0] ? 'button-valid' : 'button-invalid'}
                />
            </form>
        </div>
    );
};

export default FormCard;
