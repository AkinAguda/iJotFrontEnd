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
}
