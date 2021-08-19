
import {NBSObject} from '@nbsolutions/object';
import {
    IVersion,
    IComparable,
    ComparisonResult
} from '@nbsolutions/interfaces';

export class Version extends NBSObject implements IVersion, IComparable<Version> {
    private $major: number;
    private $minor: number;
    private $patch: number;
    private $label: string;
    private $build: number;

    private constructor() {
        super();
        this.$major = 0;
        this.$minor = 0;
        this.$patch = 0;
        this.$label = '';
        this.$build = 0;
    }

    public static parse(versionString: string): Version {
        let preSep: string[];
        if (versionString.indexOf('-') > -1) {
            preSep = versionString.split('-');
        }
        else {
            preSep = [ versionString ];
        }
        
        let parts: string[] = preSep[0].split('.');

        let v: Version = new Version();
        if (parts[0]) {
            v.$major = parseInt(parts[0]);
        }
        if (parts[1]) {
            v.$minor = parseInt(parts[1]);
        }
        if (parts[2]) {
            v.$patch = parseInt(parts[2]);
        }

        if (preSep[1]) {
            let sepParts: [string, number] = this.$parsePrerelease(preSep[1]);
            if (sepParts[0]) {
                v.$label = sepParts[0];
            }
            if (sepParts[1]) {
                v.$build = sepParts[1];
            }
        }
        
        return v;
    }

    private static $parsePrerelease(v: string): [string, number] {
        let out: [string, number] = [ null, null ];
        if (v.indexOf('.') > -1) {
            let parts: string[] = v.split('.');
            out[0] = parts[0];
            if (parts[1]) {
                out[1] = parseInt(parts[1]);
            }
        }
        else {
            out[0] = v;
        }

        return out;
    }

    public getMajor(): number {
        return this.$major;
    }

    public getMinor(): number {
        return this.$minor;
    }

    public getPatch(): number {
        return this.$patch;
    }

    public isPrerelease(): boolean {
        return this.$label !== '';
    }

    public getPrereleaseLabel(): string {
        return this.$label;
    }

    public getPrereleaseBuild(): number {
        return this.$build;
    }

    public toString(): string {
        let str: string = `${this.getMajor()}.${this.getMinor()}.${this.getPatch()}`;

        if (this.isPrerelease()) {
            str += `-${this.getPrereleaseLabel()}.${this.getPrereleaseBuild()}`;
        }

        return str;
    }

    public compare(v: Version): ComparisonResult {
        // Check major...
        if (this.getMajor() < v.getMajor()) {
            return ComparisonResult.IS_LESS_THAN;
        }
        else if (this.getMajor() > v.getMajor()) {
            return ComparisonResult.IS_GREATER_THAN;
        }
        else {
            // Check minor
            if (this.getMinor() < v.getMinor()) {
                return ComparisonResult.IS_LESS_THAN;
            }
            else if (this.getMinor() > v.getMinor()) {
                return ComparisonResult.IS_GREATER_THAN;
            }
            else {
                // Check Patch
                if (this.getPatch() < v.getPatch()) {
                    return ComparisonResult.IS_LESS_THAN;
                }
                else if (this.getPatch() > v.getPatch()) {
                    return ComparisonResult.IS_GREATER_THAN;
                }
                else if (!this.isPrerelease() && v.isPrerelease()) {
                    return ComparisonResult.IS_GREATER_THAN;
                }
                else if (this.isPrerelease() && !v.isPrerelease()) {
                    return ComparisonResult.IS_LESS_THAN;
                }
                else if (this.isPrerelease() && v.isPrerelease()) {
                    if (this.getPrereleaseBuild() < v.getPrereleaseBuild()) {
                        return ComparisonResult.IS_LESS_THAN;
                    }
                    else if (this.getPrereleaseBuild() > v.getPrereleaseBuild()) {
                        return ComparisonResult.IS_GREATER_THAN;
                    }
                    else {
                        return ComparisonResult.IS_EQUAL;
                    }
                }
                else {
                    return ComparisonResult.IS_EQUAL;
                }
            }
        }
    }
}
