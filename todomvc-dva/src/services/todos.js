import req from '../utils/localStorage';
import {delay} from '../utils';

export async function fetchLocal(data) {
    console.log("in the effect", data)
    await delay(2000);
    return data;
}

