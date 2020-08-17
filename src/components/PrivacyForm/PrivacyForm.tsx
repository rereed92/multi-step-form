import React from 'react';
import { RootState } from 'store';
import { useSelector, useDispatch } from 'react-redux';
import { Checkbox, Row, Column } from 'components';
import { setProductUpdates, setOtherProductUpdates } from 'store/userDetails';
import { useTheme } from 'react-jss';
import useStyles from './PrivacyForm.styles';

const PrivacyForm = () => {
  const dispatch = useDispatch();
  const { productUpdates, otherProductUpdates } = useSelector(
    (state: RootState) => state.userDetails
  );
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <fieldset className={classes.fieldset}>
      <legend className={classes.legend}>Privacy</legend>
      <Row>
        <Column xs={12}>
          <Checkbox
            testId="productUpdatesCheckbox"
            label="Receive updates about Tray.io product by email"
            value={productUpdates}
            onChange={(value: boolean) =>
              dispatch(setProductUpdates({ checked: value }))
            }
          />
        </Column>
        <Column xs={12}>
          <Checkbox
            testId="otherProductUpdatesCheckbox"
            label="Receive communication by email for other products created by the Tray.io team"
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
