
import * as api from '../src/api';
import defaultapi from '../src/api';
import {Version} from '../src/Version';

describe('Public API', () => {
    it('Default', () => {
        expect(defaultapi).toBe(Version);
    });

    it('Version', () => {
        expect(api.Version).toBe(Version);
    });
});
