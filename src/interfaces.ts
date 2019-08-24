import { RouteComponentProps } from 'react-router';

export interface Users {
  Uid: string | undefined;
  name: string | undefined;
  email: string | undefined;
}

export interface Input {
  type: string;
  className?: any;
  placeholder?: string;
}

export interface Ibutton {
  full?: boolean;
  light?: boolean;
  circle?: boolean;
  className?: any;
  sign?: boolean;
}

export interface SignType {
  signUp?: boolean;
}

export interface ShellTypeProps extends RouteComponentProps {
  notes?: boolean;
}
