
import { ComparisonResult } from '@nbsolutions/interfaces';
import {Version} from '../src/Version';

describe('Version', () => {
    it('1', () => {
        let v: Version = Version.parse('1');
        expect(v.getMajor()).toBe(1);
        expect(v.getMinor()).toBe(0);
        expect(v.getPatch()).toBe(0);
        expect(v.isPrerelease()).toBe(false);
    });

    it('1.2.3', () => {
        let v: Version = Version.parse('1.2.3');
        expect(v.getMajor()).toBe(1);
        expect(v.getMinor()).toBe(2);
        expect(v.getPatch()).toBe(3);
        expect(v.isPrerelease()).toBe(false);
    });

    it('1-beta', () => {
        let v: Version = Version.parse('1-beta');
        expect(v.getMajor()).toBe(1);
        expect(v.getMinor()).toBe(0);
        expect(v.getPatch()).toBe(0);
        expect(v.isPrerelease()).toBe(true);
        expect(v.getPrereleaseLabel()).toBe('beta');
        expect(v.getPrereleaseBuild()).toBe(0);
    });

    it('1-beta.', () => {
        let v: Version = Version.parse('1-beta.');
        expect(v.getMajor()).toBe(1);
        expect(v.getMinor()).toBe(0);
        expect(v.getPatch()).toBe(0);
        expect(v.isPrerelease()).toBe(true);
        expect(v.getPrereleaseLabel()).toBe('beta');
        expect(v.getPrereleaseBuild()).toBe(0);
    });

    it('1-beta.1', () => {
        let v: Version = Version.parse('1-beta.1');
        expect(v.getMajor()).toBe(1);
        expect(v.getMinor()).toBe(0);
        expect(v.getPatch()).toBe(0);
        expect(v.isPrerelease()).toBe(true);
        expect(v.getPrereleaseLabel()).toBe('beta');
        expect(v.getPrereleaseBuild()).toBe(1);
    });

    it('1.2-beta', () => {
        let v: Version = Version.parse('1.2-beta');
        expect(v.getMajor()).toBe(1);
        expect(v.getMinor()).toBe(2);
        expect(v.getPatch()).toBe(0);
        expect(v.isPrerelease()).toBe(true);
        expect(v.getPrereleaseLabel()).toBe('beta');
        expect(v.getPrereleaseBuild()).toBe(0);
    });

    it('1.2-beta.', () => {
        let v: Version = Version.parse('1.2-beta.');
        expect(v.getMajor()).toBe(1);
        expect(v.getMinor()).toBe(2);
        expect(v.getPatch()).toBe(0);
        expect(v.isPrerelease()).toBe(true);
        expect(v.getPrereleaseLabel()).toBe('beta');
        expect(v.getPrereleaseBuild()).toBe(0);
    });

    it('1.2-beta.1', () => {
        let v: Version = Version.parse('1.2-beta.1');
        expect(v.getMajor()).toBe(1);
        expect(v.getMinor()).toBe(2);
        expect(v.getPatch()).toBe(0);
        expect(v.isPrerelease()).toBe(true);
        expect(v.getPrereleaseLabel()).toBe('beta');
        expect(v.getPrereleaseBuild()).toBe(1);
    });

    it('1.2.3-beta', () => {
        let v: Version = Version.parse('1.2.3-beta');
        expect(v.getMajor()).toBe(1);
        expect(v.getMinor()).toBe(2);
        expect(v.getPatch()).toBe(3);
        expect(v.isPrerelease()).toBe(true);
        expect(v.getPrereleaseLabel()).toBe('beta');
        expect(v.getPrereleaseBuild()).toBe(0);
    });

    it('1.2.3-beta.', () => {
        let v: Version = Version.parse('1.2.3-beta.');
        expect(v.getMajor()).toBe(1);
        expect(v.getMinor()).toBe(2);
        expect(v.getPatch()).toBe(3);
        expect(v.isPrerelease()).toBe(true);
        expect(v.getPrereleaseLabel()).toBe('beta');
        expect(v.getPrereleaseBuild()).toBe(0);
    });

    it('1.2.3-beta.1', () => {
        let v: Version = Version.parse('1.2.3-beta.1');
        expect(v.getMajor()).toBe(1);
        expect(v.getMinor()).toBe(2);
        expect(v.getPatch()).toBe(3);
        expect(v.isPrerelease()).toBe(true);
        expect(v.getPrereleaseLabel()).toBe('beta');
        expect(v.getPrereleaseBuild()).toBe(1);
    });

    it('toString: 1.2.3', () => {
        let v: Version = Version.parse('1.2.3');
        expect(v.toString()).toBe('1.2.3');
    });

    it('toString: 1.2.3-beta.123', () => {
        let v: Version = Version.parse('1.2.3-beta.123');
        expect(v.toString()).toBe('1.2.3-beta.123');
    });

    describe('IComparable', () => {
        it('1.0.0 < 1.0.1', () => {
            let a: Version = Version.parse('1.0.0');
            let b: Version = Version.parse('1.0.1');

            expect(a.compare(b)).toBe(ComparisonResult.IS_LESS_THAN);
        });

        it('1.0.0 < 1.1.1', () => {
            let a: Version = Version.parse('1.0.0');
            let b: Version = Version.parse('1.1.1');

            expect(a.compare(b)).toBe(ComparisonResult.IS_LESS_THAN);
        });

        it('1.0.0 < 2.0.1', () => {
            let a: Version = Version.parse('1.0.0');
            let b: Version = Version.parse('2.0.1');

            expect(a.compare(b)).toBe(ComparisonResult.IS_LESS_THAN);
        });

        it('1.0.0 = 1.0.0', () => {
            let a: Version = Version.parse('1.0.0');
            let b: Version = Version.parse('1.0.0');

            expect(a.compare(b)).toBe(ComparisonResult.IS_EQUAL);
        });

        it('1.0.0 > 0.0.1', () => {
            let a: Version = Version.parse('1.0.0');
            let b: Version = Version.parse('0.0.1');

            expect(a.compare(b)).toBe(ComparisonResult.IS_GREATER_THAN);
        });

        it('1.2.0 > 1.1.1', () => {
            let a: Version = Version.parse('1.2.0');
            let b: Version = Version.parse('1.1.1');

            expect(a.compare(b)).toBe(ComparisonResult.IS_GREATER_THAN);
        });

        it('1.0.1 > 1.0.0', () => {
            let a: Version = Version.parse('1.0.1');
            let b: Version = Version.parse('1.0.0');

            expect(a.compare(b)).toBe(ComparisonResult.IS_GREATER_THAN);
        });

        it('1.0.0 > 1.0.0-beta.0', () => {
            let a: Version = Version.parse('1.0.0');
            let b: Version = Version.parse('1.0.0-beta.0');

            expect(a.compare(b)).toBe(ComparisonResult.IS_GREATER_THAN);
        });

        it('1.0.0-beta.0 < 1.0.0', () => {
            let a: Version = Version.parse('1.0.0-beta.0');
            let b: Version = Version.parse('1.0.0');

            expect(a.compare(b)).toBe(ComparisonResult.IS_LESS_THAN);
        });

        it('1.0.0-beta.0 < 1.0.0-beta.0', () => {
            let a: Version = Version.parse('1.0.0-beta.0');
            let b: Version = Version.parse('1.0.0-beta.0');

            expect(a.compare(b)).toBe(ComparisonResult.IS_EQUAL);
        });

        it('1.0.0-beta.0 < 1.0.0-beta.1', () => {
            let a: Version = Version.parse('1.0.0-beta.0');
            let b: Version = Version.parse('1.0.0-beta.1');

            expect(a.compare(b)).toBe(ComparisonResult.IS_LESS_THAN);
        });

        it('1.0.0-beta.1 > 1.0.0-beta.0', () => {
            let a: Version = Version.parse('1.0.0-beta.1');
            let b: Version = Version.parse('1.0.0-beta.0');

            expect(a.compare(b)).toBe(ComparisonResult.IS_GREATER_THAN);
        });
    })
});
