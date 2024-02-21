const { fromJS } = require('immutable');

export const getImmutableObject = (object) => {
    return fromJS(object);
}

