import { render, screen, fireEvent } from '@testing-library/react';
import { TextInput } from '../components';
import useDebounce from '../hooks/useDebounce';

jest.mock('../hooks/useDebounce');

describe('TextInput', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks(); // Clear any previous calls to the mock function
  });

  it('renders with the correct placeholder', () => {
    render(<TextInput type="string" value="" onChange={mockOnChange} placeholder="Enter text" />);
    const inputElement = screen.getByPlaceholderText(/enter text/i);
    expect(inputElement).toBeTruthy();
  });

  it('calls onChange with debounced value on input change', () => {
    (useDebounce as jest.Mock).mockImplementation((value) => value);
    render(<TextInput type="string" value="" onChange={mockOnChange} />);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Hello' } });

    expect(mockOnChange).toHaveBeenCalledWith('Hello');
  });

  it('sets the input value correctly for string type', () => {
    render(<TextInput type="string" value="Initial" onChange={mockOnChange} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue('Initial');
  });

  it('sets the input value correctly for number type', () => {
    render(<TextInput type="number" value={42} onChange={mockOnChange} />);
    const inputElement = screen.getByRole('spinbutton');
    expect(inputElement).toHaveValue(42);
  });

  it('sets the checkbox state correctly', () => {
    render(<TextInput type="checkbox" value={true} onChange={mockOnChange} />);
    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeChecked();
  });

  it('calls onChange with checked state for checkbox', () => {
    render(<TextInput type="checkbox" value={false} onChange={mockOnChange} />);
    const checkboxElement = screen.getByRole('checkbox');
    fireEvent.click(checkboxElement);
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it('updates the input value when prop changes', () => {
    const { rerender } = render(<TextInput type="string" value="Initial" onChange={mockOnChange} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue('Initial');

    rerender(<TextInput type="string" value="Updated" onChange={mockOnChange} />);
    expect(inputElement).toHaveValue('Updated');
  });
});