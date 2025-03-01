import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterSchema } from '../../types/counterSchema';

// @ts-ignore
export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
