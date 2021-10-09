import path from "path";
import {Pact,eachLike, like} from "@pact-foundation/pact";
import {API} from "@/api";

// this code has been modifed from https://github.com/pact-foundation/pact-workshop-js

const provider = new Pact({
    consumer: 'FrontendWebsite',
    provider: 'BackEndService',
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    logLevel: "warn",
    dir: path.resolve(process.cwd(), 'pacts'),
    spec: 2
});

describe("API Pact test", () => {
    beforeAll(() => provider.setup());
    afterEach(() => provider.verify());
    afterAll(() => provider.finalize());
    
    describe("getting all todos", () => {
        test("todos exist", async () => {
            // set up Pact interactions
            await provider.addInteraction({
                state: 'todos exist',
                uponReceiving: 'get all todos',
                withRequest: {
                    method: 'GET',
                    path: '/todos',
                    headers: {}
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: [{
                        id: "1",
                        items: ["TASK 1", "TASK 2"]
                    }],
                },
            });
            
            const api = new API(provider.mockService.baseUrl);

            // make request to mock server
            const todos = await api.GETtodos();
            expect(todos).toStrictEqual(
                [{"id": "1", "items": ["TASK 1", "TASK 2"]}]
            );
        });

        test("todos do not exist", async () => {
            // set up Pact interactions
            await provider.addInteraction({
                state: 'todos do not exist',
                uponReceiving: 'get empty to do',
                withRequest: {
                    method: 'GET',
                    path: '/todos',
                    headers: {}
                },
                willRespondWith: {
                    status: 204,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body : [],
                },
            });
            
            const api = new API(provider.mockService.baseUrl);

            // make request to mock server
            const todos = await api.GETtodos();
            console.log(todos);
            expect(todos).toStrictEqual("");
        });
    });

    describe('Testing POSTtodos', async () => {
        test('posting empyt todos', async () => {
           // set up Pact interactions
            await provider.addInteraction({
            state: 'todos do not exist',
            uponReceiving: 'post empty todos',
            withRequest: {
                method: 'POST',
                path: '/todos',
                headers: {},
                body: [],
            },
            willRespondWith: {
                status: 204,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            },
        });

        const api = new API(provider.mockService.baseUrl);
        // make request to mock server
        const todos = await api.POSTtodos([]);
        expect(todos.status).toStrictEqual(204);
        });

        test("posting non-empty todos", async () => {
            await provider.addInteraction({
            state: 'todos do not exist',
            uponReceiving: 'post non-empty to do',
            withRequest: {
                method: 'POST',
                path: '/todos',
                headers: {},
                body: [{
                    id: "1",
                    items: ["TASK 1", "TASK 2"]
                }],
            },
            willRespondWith: {
                status: 200,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            },
        });
        const api = new API(provider.mockService.baseUrl);
        // make request to mock server
        const todos = await api.POSTtodos([{
            id: "1",
            items: ["TASK 1", "TASK 2"]
        }]);
        expect(todos.status).toStrictEqual(200);

        });
    });

});
