import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
    const immutableObj = Map(object);
    return immutableObj.getIn(array);
}
