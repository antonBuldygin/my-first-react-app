// __mocks__/globalFetch.ts
export const mockFetch = (response: any, shouldFail = false) => {
    global.fetch = jest.fn(() =>
        shouldFail
            ? Promise.reject(new Error('API is down'))
            : Promise.resolve({
                ok: true,
                json: jest.fn().mockResolvedValue(response),
            })
    ) as jest.Mock;
};