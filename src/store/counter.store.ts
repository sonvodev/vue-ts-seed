import Vuex from 'vuex';

interface ICounterState {
  count: number;
}

class CounterState {
  count: number;

  constructor(initialCount: number = 0) {
      this.count = initialCount;
  }
}

class CounterModule<RootState> implements Vuex.Module<ICounterState, RootState> {
    static readonly increment = "increment";
    static readonly decrement = "decrement";

    state: ICounterState;
    namespaced: true;

    actions: Vuex.ActionTree<ICounterState, RootState> = {
        [CounterModule.increment]: ({commit}, amount: number = 1) => commit(CounterModule.increment, amount),          
        [CounterModule.decrement]: ({commit}, amount: number = 1) => commit(CounterModule.decrement, amount)

    }

    mutations: Vuex.MutationTree<ICounterState> = {
        [CounterModule.increment]: (state: ICounterState, amount: number) => state.count += amount,
        [CounterModule.decrement]: (state: ICounterState, amount: number) => state.count -= amount,
    }

    constructor(initialState: ICounterState|null = null) {
        this.state = initialState || new CounterState(0);
    }
}

export {ICounterState, CounterModule};
