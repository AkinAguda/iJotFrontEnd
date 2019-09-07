import React from 'react';
import { EditorState } from 'draft-js';
import firebase from './Firebase';
import { RouteComponentProps } from 'react-router';
import { RouteProps } from 'react-router';

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
  isLoggedIn: boolean;
  bold?: boolean;
  editorState?: EditorState;
}

export interface ProtectedRouteType {
  auth: boolean;
  to?: any;
  path: string;
  component: React.ReactType;
  exact: boolean;
  [props: string]: any;
}

export interface RouteProps extends RouteComponentProps {}

export interface FooterType {
  check?: boolean;
}
