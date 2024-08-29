import { FieldInput } from './types';

export const personFormConfig: FieldInput[] = [
  { label: 'Name', type: 'string' },
  { label: 'Age', type: 'number', min: 18, max: 99 },
  { label: 'Status', type: 'enum', options: ['Active', 'In-Active'] },
  { label: 'Registered', type: 'checkbox' },
];

export const carFormConfig: FieldInput[] = [
  { label: 'Make', type: 'enum', options: ['Mercedes', 'Bmw', 'Toyota'] },
  { label: 'Year', type: 'number', min: 2000, max: 2022 },
  { label: 'Color', type: 'string' },
  { label: 'Allow pre-orders', type: 'checkbox' },
];
