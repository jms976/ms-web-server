export interface ICreateUser {
  name: string;
  country: string;
  phone: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface IMember {
  name: string;
  country: string;
  phone: string;
  email: string;
  password: string;
  state: string;
  license: string;
  provider: string;
  config: any;
}

export interface IMemberType {
  name: string;
  country: string;
  phone: string;
  email: string;
  password: string;
  state: string;
  license: string;
  provider: string;
  providerData: {
    siteId: string;
    partnerId: number;
  };
  refreshToken: string;
  parameters: string[];
  tutorial: boolean;
  tryLoginCount: number;
  config: any;
  customOptions: any;
  authProvider?: string;
}