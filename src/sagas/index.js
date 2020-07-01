import { put, takeLatest, all } from 'redux-saga/effects';
import api from '../components/API';

function* fetchLaunches() {
    const data = [];
    let counter = 0;
    let offset = 0;
    try {
        const json = yield api.get("/upcoming/?limit=100", {responseType: 'json'})
            .then(response => {
                const results = response.data.results;
                counter = response.data.count;
                return results;
            })
        for (let i=0; i<json.length; i++) {
            data.push({
                id: json[i].id,
                name: json[i].name
            })
        }
        offset+=100;
        while (offset<counter) {
            const jsx = yield api.get("/upcoming/?limit=100&offset="+offset, {responseType: 'json'})
                .then(response => {
                    const results = response.data.results;
                    return results;
                })
            for (let i=0; i<jsx.length; i++) {
                data.push({
                    id: jsx[i].id,
                    name: jsx[i].name
                })
            }
            offset+=100;
        }
        yield put({type: "LAUNCHES_RECEIVED", data: data, counter: counter});
    } catch(error) {
        yield put ({type: "LAUNCHES_REQUEST_FAILED", error: error});
    }
}

function* fetchLaunchData(action) {
    try {
        const json = yield api.get("/" + action.launchId.id, {responseType: 'json'})
            .then(response => response.data);
        yield put({type: "LAUNCH_DATA_RECEIVED", data: json });
    } catch(error) {
        yield put ({type: "LAUNCH_DATA_REQUEST_FAILED", error: error});
    }
}

function* actionWatcher() {
    yield takeLatest('GET_LAUNCHES', fetchLaunches);
    yield takeLatest('GET_LAUNCH_DATA', fetchLaunchData)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}