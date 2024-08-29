import React from 'react';
import { FieldInput } from '../../types';

type FormCardProps = {
    title: string;
    config: FieldInput[];
};

const FormCard: React.FC<FormCardProps> = ({ title, config }) => {

    const handleSubmit = (e: React.BaseSyntheticEvent) => {
        // you can use the following code snippet to get all form elements:
        console.log(e.target.elements);
    }

    const renderContent = (input: FieldInput) => {
        if (input?.type === 'enum') {
            return <select>
                {input?.options?.map((option: any) => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        }
        else {
            return <input
                value={input?.min || ''}
                type={input?.type}
                onChange={(e) => console.log(e.target.value)}
            />
        }
    }

    return (
        <div className='form'>
            <h2>{title}</h2>
            {config?.map((input: FieldInput, index) => (
                <div key={`${input?.label}-${index}`} className='input'>
                    <label>{input?.label} </label>
                    {renderContent(input)}
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <button type='submit'>Save</button>
            </form>
        </div>
    );
};

export default FormCard;
