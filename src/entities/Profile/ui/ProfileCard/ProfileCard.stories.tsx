import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
            username: 'admin',
            age: 22,
            first: 'Anna',
            lastname: 'Zotova',
            country: Country.Belarus,
            city: 'Minsk',
            currency: Currency.RUB,
            avatar: 'https://avatars.mds.yandex.net/i?id=a484b01bf2473930911afad709acc461_l-7765754-images-thumbs&n=13',
        },
    },
};

export const WithError: Story = {
    args: {
        error: 'ofeqbbf',
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
