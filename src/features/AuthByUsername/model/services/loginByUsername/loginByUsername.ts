import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, ThunkExtraApg } from 'app/providers/StoreProvider';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;
        try {
            const response = await extra.api.post<User>('/login', authData);

            if (!response.data) {
                throw new Error('User not found');
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            extra.navigate?.('/about');
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);
