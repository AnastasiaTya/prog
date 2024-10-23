import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginLoading } from './getLoginLoading';

describe('getLoginLoading.test', () => {
    test('should return true', () => {
        const state: Partial<StateSchema> = {
            // @ts-ignore
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: Partial<StateSchema> = {};
        expect(getLoginLoading(state as StateSchema)).toEqual(false);
    });
});
