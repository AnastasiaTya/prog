import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<Profile>('/profile');
            if (!response.data) {
                throw new Error('Profile not found');
            }
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);
