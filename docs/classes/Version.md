[@nbsolutions/version - v0.0.0](../README.md) / [Exports](../modules.md) / Version

# Class: Version

## Hierarchy

- `NBSObject`

  ↳ **`Version`**

## Implements

- `IVersion`
- `IComparable`<[`Version`](Version.md)\>

## Table of contents

### Methods

- [\_excludeNBSObjectAutoBindingsFor](Version.md#_excludenbsobjectautobindingsfor)
- [\_skipNBSObjectAutoBind](Version.md#_skipnbsobjectautobind)
- [compare](Version.md#compare)
- [getClassName](Version.md#getclassname)
- [getMajor](Version.md#getmajor)
- [getMinor](Version.md#getminor)
- [getPatch](Version.md#getpatch)
- [getPrereleaseBuild](Version.md#getprereleasebuild)
- [getPrereleaseLabel](Version.md#getprereleaselabel)
- [isPrerelease](Version.md#isprerelease)
- [toString](Version.md#tostring)
- [getClassName](Version.md#getclassname-1)
- [isVoid](Version.md#isvoid)
- [parse](Version.md#parse)

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
| `v` | [`Version`](Version.md) |

#### Returns

`ComparisonResult`

#### Implementation of

IVersion.compare

#### Defined in

[src/Version.ts:110](https://github.com/nbsolutions-ca/version/blob/f713de6/src/Version.ts#L110)

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

[src/Version.ts:76](https://github.com/nbsolutions-ca/version/blob/f713de6/src/Version.ts#L76)

___

### getMinor

▸ **getMinor**(): `number`

#### Returns

`number`

#### Implementation of

IVersion.getMinor

#### Defined in

[src/Version.ts:80](https://github.com/nbsolutions-ca/version/blob/f713de6/src/Version.ts#L80)

___

### getPatch

▸ **getPatch**(): `number`

#### Returns

`number`

#### Implementation of

IVersion.getPatch

#### Defined in

[src/Version.ts:84](https://github.com/nbsolutions-ca/version/blob/f713de6/src/Version.ts#L84)

___

### getPrereleaseBuild

▸ **getPrereleaseBuild**(): `number`

#### Returns

`number`

#### Implementation of

IVersion.getPrereleaseBuild

#### Defined in

[src/Version.ts:96](https://github.com/nbsolutions-ca/version/blob/f713de6/src/Version.ts#L96)

___

### getPrereleaseLabel

▸ **getPrereleaseLabel**(): `string`

#### Returns

`string`

#### Implementation of

IVersion.getPrereleaseLabel

#### Defined in

[src/Version.ts:92](https://github.com/nbsolutions-ca/version/blob/f713de6/src/Version.ts#L92)

___

### isPrerelease

▸ **isPrerelease**(): `boolean`

#### Returns

`boolean`

#### Implementation of

IVersion.isPrerelease

#### Defined in

[src/Version.ts:88](https://github.com/nbsolutions-ca/version/blob/f713de6/src/Version.ts#L88)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Implementation of

IVersion.toString

#### Defined in

[src/Version.ts:100](https://github.com/nbsolutions-ca/version/blob/f713de6/src/Version.ts#L100)

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

▸ `Static` **parse**(`versionString`): [`Version`](Version.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `versionString` | `string` |

#### Returns

[`Version`](Version.md)

#### Defined in

[src/Version.ts:25](https://github.com/nbsolutions-ca/version/blob/f713de6/src/Version.ts#L25)
