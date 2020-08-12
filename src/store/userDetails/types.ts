export interface IUserDetailsState {
  name: string;
  role: string;
  email: string;
  password: string;
  productUpdates: boolean;
  otherProductUpdates: boolean;
}

export interface IInputPayload {
  input: string;
}

export interface ICheckboxPayload {
  checked: boolean;
}
