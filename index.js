import R from 'ramda';

// ifEmpty :: String -> String -> true | String
const ifEmpty = R.uncurryN(2, R.pipe(
  R.always,
  R.ifElse(
    R.anyPass([R.isEmpty, R.isNil]),
    R.__,
    R.T)
));

export default ifEmpty;
