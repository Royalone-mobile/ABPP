export interface Repository {
    setAuth(token_id): void;
    getAuth(): void;
    clearAuth(): void;

    setForm(form): void;
    getForm(form_id): void;
    getAllForms(): void;
    clearForms(): void;

    getSettings(): void;
    setSettings(settings): void;
    getSetting(key): void;
    setSetting(key, value): void;
    clearSettings(): void;

    addToQueue(form_id, payload): void;
    getOneQueue(queu_id): void;
    getQueue(): void;
    getQueueWithStatus(status): void;
    clearQueu(): void;
    clearAll(): void;
}