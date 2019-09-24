import React from 'react';
import { EditorState } from 'draft-js';
import firebase from './Firebase';
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
  onInput?: any;
  name?: string;
}

export interface Ibutton {
  full?: boolean;
  light?: boolean;
  circle?: boolean;
  smallCircle?: boolean;
  className?: any;
  sign?: boolean;
  onClick?: any;
  loading?: boolean;
  active?: boolean;
}

export interface SignType extends RouteComponentProps {
  signUp?: boolean;
}

export interface ShellTypeProps extends RouteComponentProps {
  notes?: boolean;
  edit?: boolean;
}

export interface Credentials {
  email: string;
  password: string;
  [x: string]: string;
}

export interface GoogleFirebaseUserAuthCredentials
  extends firebase.auth.UserCredential {
  credential: firebase.auth.OAuthCredential;
}

export interface UserStates {
  uid: string;
  isLoggedIn: boolean;
  bold: boolean;
  italic: boolean;
  editorState: EditorState;
  noteTitle: string;
  noteType: string;
}

export interface ProtectedRouteType {
  auth: boolean;
  to?: any;
  path: string;
  component: React.ReactType;
  exact: boolean;
  [props: string]: any;
}

export interface CategoryProps {
  type: string;
  text?: string;
  key?: string;
  onClick?: () => void;
}
// export interface RouteProps extends RouteComponentProps {}

export interface FooterType {
  check?: boolean;
}

export interface DBNoteType {
  noteId: string;
  category: string;
  title: string;
  editorState: any;
}
