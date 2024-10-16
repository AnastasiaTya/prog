import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageError } from './PageError';

const meta = {
    title: 'widgets/PageError',
    component: PageError,
    tags: ['autodocs'],
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
    decorators: [
        StyleDecorator,
    ],
};

export const Dark: Story = {
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.DARK),
    ],
};
