import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Заголовок',
        text: 'Какой-то текст',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Заголовок',
        text: 'Какой-то текст',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const Error: Story = {
    args: {
        title: 'Заголовок',
        text: 'Какой-то текст',
        theme: TextTheme.ERROR,
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Заголовок',
    },
};

export const onlyTitleDark: Story = {
    args: {
        title: 'Заголовок',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const onlyText: Story = {
    args: {
        text: 'Какой-то текст',
    },
};

export const onlyTextDark: Story = {
    args: {
        text: 'Какой-то текст',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
