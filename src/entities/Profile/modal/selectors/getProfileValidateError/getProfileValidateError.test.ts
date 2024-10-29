import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateError } from './getProfileValidateError';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileValidateError.test', () => {
    test('should return error', () => {
        const state: Partial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_USER_DATA,
                ],
            },
        };
        expect(getProfileValidateError(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
    test('should work with empty state', () => {
        const state: Partial<StateSchema> = {};
        expect(getProfileValidateError(state as StateSchema)).toEqual(undefined);
    });
});
