import jssCamelCase from 'jss-plugin-camel-case';
import jssDefaultUnit from 'jss-plugin-default-unit';
import jssExtend from 'jss-plugin-extend';
import jssGlobal from 'jss-plugin-global';
import jssNested from 'jss-plugin-nested';
import jssVendorPrefixer from 'jss-plugin-vendor-prefixer';

const plugins =
  (jssCamelCase(),
  jssDefaultUnit(),
  jssExtend(),
  jssGlobal(),
  jssNested(),
  jssVendorPrefixer());

export default plugins;
