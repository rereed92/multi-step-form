import React from 'react';
import { mountComponent, getTestId } from 'utilities/testing';
import { ReactWrapper } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { setProductUpdates, setOtherProductUpdates } from 'store/userDetails';
import PrivacyForm from './PrivacyForm';

describe('PrivacyForm', () => {
  let wrapper: ReactWrapper;

  const mockStore = configureMockStore([thunk]);
  const store = mockStore({
    userDetails: {
      productUpdates: false,
      otherProductUpdates: false,
    },
  });

  beforeEach(() => {
    wrapper = mountComponent(
      <Provider store={store}>
        <PrivacyForm />
      </Provider>
    );
  });

  it('should render correctly', () => {
    expect(wrapper.find(getTestId('productUpdatesCheckbox'))).toHaveLength(1);
    expect(wrapper.find(getTestId('otherProductUpdatesCheckbox'))).toHaveLength(
      1
    );
  });

  it('should handle onChange correctly for productUpdates', () => {
    store.clearActions();

    wrapper
      .find(getTestId('productUpdatesCheckbox'))
      .props()
      .onChange({ target: { checked: true } });

    expect(store.getActions()).toEqual([setProductUpdates({ checked: true })]);
  });

  it('should handle onChange correctly for otherProductUpdates', () => {
    store.clearActions();

    wrapper
      .find(getTestId('otherProductUpdatesCheckbox'))
      .props()
      .onChange({ target: { checked: true } });

    expect(store.getActions()).toEqual([
      setOtherProductUpdates({ checked: true }),
    ]);
  });
});
