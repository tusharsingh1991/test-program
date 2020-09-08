import { RootObject } from '../../interfaces/stories';
import { IAction } from '../../interfaces/reducers';
import ActionTypes from '../types';
const initialState: RootObject = {
    hits: [],
    nbHits: 0,
    page: 0,
    nbPages: 0,
    hitsPerPage: 0,
    exhaustiveNbHits: false,
    query: '',
    params: '',
    processingTimeMS: 0
}
const Stories = (state = initialState, action: IAction) => {
    switch (action.type) {
        case ActionTypes.Stories.LOAD_STORIES:
            return state;
        default:
            return state;
    }
}

export default Stories;