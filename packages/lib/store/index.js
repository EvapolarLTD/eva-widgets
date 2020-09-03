export let store;

export const injectStore = (v) => (store = v);
export const getStore = () => store;
