import { Map } from 'immutable';

const accessImmutableObject = (object, array) => {
    const immutableObj = Map(object);
    return immutableObj.getIn(array, undefined);
}

export default accessImmutableObject;
