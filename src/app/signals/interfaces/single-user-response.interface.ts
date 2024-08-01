export interface SingleUserResponse {
  data:    User;
  support: Support;
}

export interface User {
  id?:         string | undefined;
  email?:      string | undefined;
  first_name?: string | undefined;
  last_name?:  string | undefined;
  avatar?:     string | undefined;
}

export interface Support {
  url:  string;
  text: string;
}
