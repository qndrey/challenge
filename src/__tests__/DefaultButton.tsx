import { render, screen, fireEvent } from '@testing-library/react';
import { DefaultButton } from '../components';

describe('DefaultButton', () => {
  it('renders with the correct label', () => {
    render(<DefaultButton label="Click Me" />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeTruthy();
  });

  it('disabled when the disabled prop is true', () => {
    render(<DefaultButton label="Click Me" disabled />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeDisabled();
  });

  it('enabled when the disabled prop is false', () => {
    render(<DefaultButton label="Click Me" disabled={false} />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeEnabled();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<DefaultButton label="Click Me" onClick={handleClick} />);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick handler when disabled', () => {
    const handleClick = jest.fn();
    render(<DefaultButton label="Click Me" onClick={handleClick} disabled />);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies custom className', () => {
    render(<DefaultButton label="Click Me" className="custom-class" />);
   const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toHaveClass('custom-class');
  });
});