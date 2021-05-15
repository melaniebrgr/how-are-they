import { REQUEST } from '@App/store/actions/actions.constants';

export const createAsyncActionTypes = (type: string) => ({
  pending: `${type}: ${REQUEST.PENDING}`,
  success: `${type}: ${REQUEST.SUCCESS}`,
  error: `${type}: ${REQUEST.ERROR}`,
  cancel: `${type}: ${REQUEST.CANCEL}`
});