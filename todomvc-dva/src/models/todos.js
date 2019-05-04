import * as todosService from '../services/todos';

export default {
  namespace: 'todos',
  state: {
    list: [],
    total: null,
  },
  reducers: {
    save(state, { payload: { data: list, total } }) {
      console.log("I'm the save reducers")
      return { ...state, list, total };
    },
    add(state, { payload: data }){
      let test=Object.assign({},state);
      test.list.push({
        title: data,
        completed: false
      })
      return test;
    }
  },
  effects: {
    *fetchLocal({ payload:  data  }, { call, put }) {
      const qq=yield call(todosService.fetchLocal, data);
      console.log("data:", qq);
      // yield put({ type: 'save', payload: { data, total: 2 } });
      // yield put({type: 'test'});
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/todos') {
          dispatch({ type: 'fetchLocal', payload: query });
        }
      });
    },
  },
};