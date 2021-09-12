[@nbsolutions/version - v0.0.0-alpha.0](../README.md) / [Exports](../modules.md) / [Version](../modules/Version.md) / Version

# Class: Version

[Version](../modules/Version.md).Version

## Hierarchy

- `NBSObject`

  ↳ **`Version`**

## Implements

- `IVersion`
- `IComparable`<[`Version`](Version.Version-1.md)\>

## Table of contents

### Methods

- [\_excludeNBSObjectAutoBindingsFor](Version.Version-1.md#_excludenbsobjectautobindingsfor)
- [\_skipNBSObjectAutoBind](Version.Version-1.md#_skipnbsobjectautobind)
- [compare](Version.Version-1.md#compare)
- [getClassName](Version.Version-1.md#getclassname)
- [getMajor](Version.Version-1.md#getmajor)
- [getMinor](Version.Version-1.md#getminor)
- [getPatch](Version.Version-1.md#getpatch)
- [getPrereleaseBuild](Version.Version-1.md#getprereleasebuild)
- [getPrereleaseLabel](Version.Version-1.md#getprereleaselabel)
- [isPrerelease](Version.Version-1.md#isprerelease)
- [toString](Version.Version-1.md#tostring)
- [getClassName](Version.Version-1.md#getclassname)
- [isVoid](Version.Version-1.md#isvoid)
- [parse](Version.Version-1.md#parse)

## Methods

### \_excludeNBSObjectAutoBindingsFor

▸ `Protected` **_excludeNBSObjectAutoBindingsFor**(): `string`[]

#### Returns

`string`[]

#### Inherited from

NBSObject.\_excludeNBSObjectAutoBindingsFor

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:36

___

### \_skipNBSObjectAutoBind

▸ `Protected` **_skipNBSObjectAutoBind**(): `boolean`

#### Returns

`boolean`

#### Inherited from

NBSObject.\_skipNBSObjectAutoBind

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:34

___

### compare

▸ **compare**(`v`): `ComparisonResult`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Version`](Version.Version-1.md) |

#### Returns

`ComparisonResult`

#### Implementation of

IVersion.compare

#### Defined in

[src/Version.ts:110](https://github.com/nbsolutions-ca/version/blob/f608846/src/Version.ts#L110)

___

### getClassName

▸ **getClassName**(): `string`

#### Returns

`string`

#### Implementation of

IVersion.getClassName

#### Inherited from

NBSObject.getClassName

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:26

___

### getMajor

▸ **getMajor**(): `number`

#### Returns

`number`

#### Implementation of

IVersion.getMajor

#### Defined in

[src/Version.ts:76](https://github.com/nbsolutions-ca/version/blob/f608846/src/Version.ts#L76)

___

### getMinor

▸ **getMinor**(): `number`

#### Returns

`number`

#### Implementation of

IVersion.getMinor

#### Defined in

[src/Version.ts:80](https://github.com/nbsolutions-ca/version/blob/f608846/src/Version.ts#L80)

___

### getPatch

▸ **getPatch**(): `number`

#### Returns

`number`

#### Implementation of

IVersion.getPatch

#### Defined in

[src/Version.ts:84](https://github.com/nbsolutions-ca/version/blob/f608846/src/Version.ts#L84)

___

### getPrereleaseBuild

▸ **getPrereleaseBuild**(): `number`

#### Returns

`number`

#### Implementation of

IVersion.getPrereleaseBuild

#### Defined in

[src/Version.ts:96](https://github.com/nbsolutions-ca/version/blob/f608846/src/Version.ts#L96)

___

### getPrereleaseLabel

▸ **getPrereleaseLabel**(): `string`

#### Returns

`string`

#### Implementation of

IVersion.getPrereleaseLabel

#### Defined in

[src/Version.ts:92](https://github.com/nbsolutions-ca/version/blob/f608846/src/Version.ts#L92)

___

### isPrerelease

▸ **isPrerelease**(): `boolean`

#### Returns

`boolean`

#### Implementation of

IVersion.isPrerelease

#### Defined in

[src/Version.ts:88](https://github.com/nbsolutions-ca/version/blob/f608846/src/Version.ts#L88)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Implementation of

IVersion.toString

#### Defined in

[src/Version.ts:100](https://github.com/nbsolutions-ca/version/blob/f608846/src/Version.ts#L100)

___

### getClassName

▸ `Static` **getClassName**(`o`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `any` |

#### Returns

`string`

#### Inherited from

NBSObject.getClassName

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:37

___

### isVoid

▸ `Static` **isVoid**<`T`\>(`o`): `boolean`

Returns true if the given value is `null` or `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Any value |

#### Returns

`boolean`

#### Inherited from

NBSObject.isVoid

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:33

___

### parse

▸ `Static` **parse**(`versionString`): [`Version`](Version.Version-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `versionString` | `string` |

#### Returns

[`Version`](Version.Version-1.md)

#### Defined in

[src/Version.ts:25](https://github.com/nbsolutions-ca/version/blob/f608846/src/Version.ts#L25)
