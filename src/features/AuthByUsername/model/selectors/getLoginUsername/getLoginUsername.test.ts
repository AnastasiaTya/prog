import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return admin', () => {
        const state: Partial<StateSchema> = {
            // @ts-ignore
            loginForm: {
                username: 'admin',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('admin');
    });
    test('should work with empty state', () => {
        const state: Partial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
