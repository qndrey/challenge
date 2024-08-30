import { FieldInput } from './types';

export const personFormConfig: FieldInput[] = [
  { label: 'Name', type: 'string', placeholder: 'Enter your name', required: true },
  { label: 'Age', type: 'number', min: 18, max: 99, required: true },
  { label: 'Status', type: 'enum', options: ['Active', 'In-Active'], required: true },
  { label: 'Registered', type: 'checkbox', required: true },
];

export const carFormConfig: FieldInput[] = [
  { label: 'Make', type: 'enum', options: ['Mercedes', 'Bmw', 'Toyota'], required: true },
  { label: 'Year', type: 'number', min: 2000, max: 2022, required: true },
  { label: 'Color', type: 'string', placeholder: 'Enter car color', required: false },
  { label: 'Allow pre-orders', type: 'checkbox', required: true },
];
