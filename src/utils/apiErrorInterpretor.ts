export enum ErrorCodesEnum {
  ALREADY_EXISTS = "ALREADY_EXISTS",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  NOT_FOUND = "NOT_FOUND",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export const AuthErrors: {
  [key: string]: { [key: string]: string }
} = {
  ['email']: {
    [ErrorCodesEnum.UNIQUE]: 'Este email já foi cadastrado'
  }
};

export const apiErrorInterpretor = (field: string, code: string) => AuthErrors[field][code]