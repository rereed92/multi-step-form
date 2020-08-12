import React from 'react';
import { RootState } from 'store';
import { useSelector, useDispatch } from 'react-redux';
import { Checkbox } from 'components';
import { setProductUpdates, setOtherProductUpdates } from 'store/userDetails';

const PrivacyForm = () => {
  const dispatch = useDispatch();
  const { productUpdates, otherProductUpdates } = useSelector(
    (state: RootState) => state.userDetails
  );
  return (
    <fieldset>
      <legend>Privacy</legend>
      <Checkbox
        label="product updates"
        value={productUpdates}
        onChange={(value: boolean) =>
          dispatch(setProductUpdates({ checked: value }))
        }
      />

      <Checkbox
        label="other product updates"
        value={otherProductUpdates}
        onChange={(value: boolean) =>
          dispatch(setOtherProductUpdates({ checked: value }))
        }
      />
    </fieldset>
  );
};

export default PrivacyForm;
