import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import initialState from './state';
import userDetailsSlice, {
  setName,
  setRole,
  setEmail,
  setPassword,
  setProductUpdates,
  setOtherProductUpdates,
  submitData,
} from './index';

const { reducer } = userDetailsSlice;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('userDetailsReducer', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle setName', () => {
    expect(
      reducer(initialState, {
        type: setName.type,
        payload: {
          input: 'name',
        },
      })
    ).toEqual({
      ...initialState,
      name: 'name',
    });
  });

  it('should handle setRole', () => {
    expect(
      reducer(initialState, {
        type: setRole.type,
        payload: {
          input: 'role',
        },
      })
    ).toEqual({
      ...initialState,
      role: 'role',
    });
  });

  it('should handle setEmail', () => {
    expect(
      reducer(initialState, {
        type: setEmail.type,
        payload: {
          input: 'email',
        },
      })
    ).toEqual({
      ...initialState,
      email: 'email',
    });
  });

  it('should handle setPassword', () => {
    expect(
      reducer(initialState, {
        type: setPassword.type,
        payload: {
          input: 'password',
        },
      })
    ).toEqual({
      ...initialState,
      password: 'password',
    });
  });

  it('should handle setProductUpdates', () => {
    expect(
      reducer(
        { ...initialState, productUpdates: false },
        {
          type: setProductUpdates.type,
          payload: {
            checked: true,
          },
        }
      )
    ).toEqual({
      ...initialState,
      productUpdates: true,
    });
  });

  it('should handle setOtherProductUpdates', () => {
    expect(
      reducer(
        { ...initialState, otherProductUpdates: false },
        {
          type: setOtherProductUpdates.type,
          payload: {
            checked: true,
          },
        }
      )
    ).toEqual({
      ...initialState,
      otherProductUpdates: true,
    });
  });

  it('should handle submitData correctly', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    const data = {
      name: 'name',
      role: 'role',
      email: 'email',
      password: 'password',
      productUpdates: false,
      otherProductUpdates: true,
    };

    const store = mockStore();

    store.dispatch(submitData(data) as any);
    expect(consoleSpy).toHaveBeenCalledWith(data);
  });
});
