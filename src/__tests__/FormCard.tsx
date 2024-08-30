import { render, screen, fireEvent } from '@testing-library/react';
import { FormCard } from '../components';
import { FieldInput } from '../types';

describe('FormCard', () => {
    const mockConfig: FieldInput[] = [
        { label: 'Name', type: 'string', required: true, placeholder: 'Enter your name' },
        { label: 'Age', type: 'number', required: true, min: 18, max: 100, placeholder: 'Enter your age' },
        { label: 'Gender', type: 'enum', required: false, options: ['Male', 'Female'], placeholder: 'Select your gender' },
    ];

    it('renders form with inputs', () => {
        render(<FormCard title="User Form" config={mockConfig} />);

        expect(screen.getByText(/user form/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/enter your name/i)).toBeInTheDocument();
        expect(screen.getByText('Age')).toBeInTheDocument();
        expect(screen.getByText('Gender')).toBeInTheDocument();
    });

    it('shows validation error for required fields', () => {
        render(<FormCard title="User Form" config={mockConfig} />);

        fireEvent.click(screen.getByRole('button', { name: /save/i }));

        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/age is required/i)).toBeInTheDocument();
    });

    it('disbaled button if any input is not valid', () => {
        render(<FormCard title="User Form" config={mockConfig} />);

        fireEvent.change(screen.getByPlaceholderText(/enter your name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByPlaceholderText(/enter your age/i), { target: { value: 16 } });
        const buttonElement = screen.getByRole('button', { name: /save/i });
        expect(buttonElement).toHaveClass('button-invalid');
    });
});