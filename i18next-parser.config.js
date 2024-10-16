module.exports = {
    locales: ['en', 'ru'],
    output: 'public/locales/$LOCALE/$NAMESPACE.json',
    keySeparator: false,
    namespaceSeparator: false,
    createOldCatalogs: false,
    useKeysAsDefaultValue: true,
    defaultValue: (lng, ns, key) => key,
    sort: true
}