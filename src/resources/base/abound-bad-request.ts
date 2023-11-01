export type ApiBadRequest = {
  errors: Array<{
    field?: string;
    message: string;
  }>;
};

export class AboundBadRequest {
  errors: ApiBadRequest["errors"];
  constructor(apiErrors: ApiBadRequest["errors"]) {
    this.errors = apiErrors;
  }
}
