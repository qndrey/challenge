export type FieldType = 'string' | 'number' | 'checkbox' | 'enum';

export type FieldInput = {
  label: string;
  type: FieldType;
  min?: number;
  max?: number;
  options?: string[];
}
