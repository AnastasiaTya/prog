import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return 123123', () => {
        const state: Partial<StateSchema> = {
            // @ts-ignore
            loginForm: {
                password: '123123',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123123');
    });
    test('should work with empty state', () => {
        const state: Partial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
