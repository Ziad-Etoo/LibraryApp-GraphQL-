import * as LR from './resolve.js';
import * as LT from './type.js';

export const libraryQuery = {
    getLibraries: {
        type: LT.libraryType,
        resolve: LR.getLibraries
    }
};
