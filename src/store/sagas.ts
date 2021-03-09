import axios from "axios";

// eslint-disable-next-line
export function* helloSaga() {
    console.log('Hello Sagas!')
}

export function* testRequest(requestDone: boolean){
    yield axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=576109c719c241c5ad73e982861525c6')
    .then(response =>{
        console.log(response.data);
    });
    return 1;
}

export function* thisIsAGenerator(foo: boolean) {
    yield "hello world";
    return 0;
}