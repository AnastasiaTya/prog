import { RuleSetRule } from 'webpack';

// Type guard для проверки, является ли правило типа RuleSetRule
export function isRuleSetRule(rule: unknown): rule is RuleSetRule {
    return (
        typeof rule === 'object'
    && rule !== null
    && 'test' in rule // Проверяем наличие свойства 'test'
    && (rule as RuleSetRule).test instanceof RegExp // Убедимся, что test - это регулярное выражение
    );
}
