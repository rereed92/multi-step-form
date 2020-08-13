import React from 'react';
import { RootState } from 'store';
import { useSelector, useDispatch } from 'react-redux';
import { Checkbox, Row, Column } from 'components';
import { setProductUpdates, setOtherProductUpdates } from 'store/userDetails';

const PrivacyForm = () => {
  const dispatch = useDispatch();
  const { productUpdates, otherProductUpdates } = useSelector(
    (state: RootState) => state.userDetails
  );
  return (
    <fieldset>
      <legend>Privacy</legend>
      <Row>
        <Column width={12}>
          <Checkbox
            label="product updates"
            value={productUpdates}
            onChange={(value: boolean) =>
              dispatch(setProductUpdates({ checked: value }))
            }
          />
        </Column>
        <Column width={12}>
          <Checkbox
            label="other product updates"
            value={otherProductUpdates}
            onChange={(value: boolean) =>
              dispatch(setOtherProductUpdates({ checked: value }))
            }
          />
        </Column>
      </Row>
    </fieldset>
  );
};

export default PrivacyForm;
