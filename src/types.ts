export type FieldType = 'string' | 'number' | 'checkbox' | 'enum';

export type FieldInput = {
  label: string;
  type: FieldType;
  placeholder?: string;    
  required: boolean,
  min?: number;
  max?: number;
  options?: string[];
}
