## [5.0.1](https://github.com/comparto/eslint-config/compare/v5.0.0...v5.0.1) (2020-11-22)


### Bug Fixes

* **imports:** 🐛 resolved typescript settings not being applied every time ([6938d1c](https://github.com/comparto/eslint-config/commit/6938d1c50b28ac6fcea08dd2c2f706b93b9159fa)), closes [#55](https://github.com/comparto/eslint-config/issues/55)
* **jest:** 🐛 disable max-lines-per-function to account for `describe` ([70f5670](https://github.com/comparto/eslint-config/commit/70f567069e11abe1b4340f892f6381a47005588f))
* **react:** 🐛 added React methods to `class-methods-use-this` exceptions ([ccd75ce](https://github.com/comparto/eslint-config/commit/ccd75ce6e5f5a2fe73d9c2a32f503b759de2074a)), closes [#58](https://github.com/comparto/eslint-config/issues/58)
* **style:** 🐛 disable prettier conflicting rules ([304226c](https://github.com/comparto/eslint-config/commit/304226cbb18a337a2c3b6ae556380d2b8c1fa88a))
* **typescript:** 🐛 allow `PascalCase` for `React` components declarations ([309060b](https://github.com/comparto/eslint-config/commit/309060b830a5b841f19c928abab48f46245e900f)), closes [#56](https://github.com/comparto/eslint-config/issues/56)
* **typescript:** 🐛 resolved 'React' was used before it was defined error ([1debcbb](https://github.com/comparto/eslint-config/commit/1debcbbbc9ea66a143a3bd2480eb00ab00956a4d)), closes [#57](https://github.com/comparto/eslint-config/issues/57)

# [5.0.0](https://github.com/comparto/eslint-config/compare/v4.0.1...v5.0.0) (2020-11-22)


### Features

* **deps:** 🎸 @typescript-eslint/*[@4](https://github.com/4).8.1 ([abbb84b](https://github.com/comparto/eslint-config/commit/abbb84bee6f552ec7f3b91334d659ac947fb9fcb))
* **deps:** 🎸 eslint-config-prettier@6.15.0 ([60de0b4](https://github.com/comparto/eslint-config/commit/60de0b42ae12b30ce77c9adcd4a363e403555369))
* **deps:** 🎸 eslint-import-resolver-webpack@0.13.0 ([fc5f4b3](https://github.com/comparto/eslint-config/commit/fc5f4b398e68cdc079a904c46707b8fe5b1dc726))
* **deps:** 🎸 eslint-plugin-import@2.21.2 ([d18dbcc](https://github.com/comparto/eslint-config/commit/d18dbcc9629b848f0fe948b3b1db91146875cc68))
* **deps:** 🎸 eslint-plugin-jest@24.1.3 ([14a4a2a](https://github.com/comparto/eslint-config/commit/14a4a2a6c53ef8becfc4f8b09e9bd54a5edadb08))
* **deps:** 🎸 eslint-plugin-jsx-a11y@6.3.1 ([d913791](https://github.com/comparto/eslint-config/commit/d9137910719700e338cbb52dbf3e1da7de37ce45))
* **deps:** 🎸 eslint-plugin-prettier@3.14.0 ([9ea923a](https://github.com/comparto/eslint-config/commit/9ea923a2de2881e4edfe0f8a3ed316c26417bafb))
* **deps:** 🎸 eslint-plugin-react-hooks@4.2.0 ([10d2c21](https://github.com/comparto/eslint-config/commit/10d2c217d01a57b801b083702b25d01c4ab83e02))
* **deps:** 🎸 eslint-plugin-react@7.21.5 ([ff08347](https://github.com/comparto/eslint-config/commit/ff083476bc10e7b6eeccdf80febadcb154e4ceda))
* **deps:** 🎸 eslint@7.14.0 ([4e00196](https://github.com/comparto/eslint-config/commit/4e001963001520f3a135eebf94de673608e50e5b))
* **jest:** 🎸 enforce no-conditional-expect, no-interpolation-in-snapshots ([e72f82a](https://github.com/comparto/eslint-config/commit/e72f82a99ff423c0fdc9d2d0cdf6085c549af072))
* **practices:** 🎸 enabled multipe rules to improve practices ([5304bbb](https://github.com/comparto/eslint-config/commit/5304bbb974813868df15aabf69fec661e0d7743b))


### BREAKING CHANGES

* **jest:** 🧨 `jest/no-conditional-expect` and `jest/no-interpolation-in-snapshots`
are not auto-fixable
* **practices:** 🧨 `class-methods-use-this`, `grouped-accessor-pairs`, `no-empty-function`,
`no-nonoctal-decimal-escape`, `no-unused-expressions`, and `prefer-promise-reject-errors`
are not auto-fixable.

## [4.0.1](https://github.com/comparto/eslint-config/compare/v4.0.0...v4.0.1) (2020-08-18)


### Bug Fixes

* **imports:** 🐛 resolved no-unresolved and extensions conflicts ([3bcf34f](https://github.com/comparto/eslint-config/commit/3bcf34fd5ae2376feab9ba986250580aff4121dd)), closes [#45](https://github.com/comparto/eslint-config/issues/45)

# [4.0.0](https://github.com/comparto/eslint-config/compare/v3.0.0...v4.0.0) (2020-07-22)


### Bug Fixes

* **errors:** 🐛 actually include rules ([d0a023c](https://github.com/comparto/eslint-config/commit/d0a023cd1d4578c52b4fec045e4b6106ad5bd12d)), closes [#40](https://github.com/comparto/eslint-config/issues/40)


### Features

* **all:** 🎸 expanded core rules, added better es6 support ([ea6045c](https://github.com/comparto/eslint-config/commit/ea6045c5cd8dfff3d6a2ff13d9c6a7d7deba597e)), closes [#41](https://github.com/comparto/eslint-config/issues/41)
* **imports:** 🎸 added more rules ([2d96567](https://github.com/comparto/eslint-config/commit/2d9656704886077b4899abd79117859faff7fc97)), closes [#38](https://github.com/comparto/eslint-config/issues/38)
* **jest:** 🎸 added a lot more rules to enforce best practices ([78dbe17](https://github.com/comparto/eslint-config/commit/78dbe17dc111f83fbc97a1fbe7d9ade8cdf0f1f1)), closes [#37](https://github.com/comparto/eslint-config/issues/37)
* **style:** 🎸 introduced more rules, eslint@7.5.0 support ([b98fd43](https://github.com/comparto/eslint-config/commit/b98fd43118ff61490139f41a9e0211e1afac0f1e))


### BREAKING CHANGES

* **all:** 🧨 a lot of new rules introduced that are not auto-fixable(--fix)
* **style:** 🧨 requires eslint@7.5.0, most new rules are not auto-fixable(--fix)
* **imports:** 🧨 some of these new import rules are not auto-fixable(--fix)
* **jest:** 🧨 most of these new jest rules are not auto-fixable(--fix)

# [3.0.0](https://github.com/comparto/eslint-config/compare/v2.0.0...v3.0.0) (2020-07-19)


### Features

* 🎸 enhanced style, best practices, react and error rules ([b64eb77](https://github.com/comparto/eslint-config/commit/b64eb77c2e875357c55493c3562f5a8bfeb487ba)), closes [#35](https://github.com/comparto/eslint-config/issues/35)


### BREAKING CHANGES

* 🧨 most new rules are not auto-fixable(--fix)

# [2.0.0](https://github.com/comparto/eslint-config/compare/v1.1.2...v2.0.0) (2020-07-17)


### Features

* 🎸 `prettier` rules are now decoupled from eslint ([ac0d8a2](https://github.com/comparto/eslint-config/commit/ac0d8a29a344044479c712bd8e57e299d72042fd)), closes [#31](https://github.com/comparto/eslint-config/issues/31)


### BREAKING CHANGES

* Install [`@comparto/prettier-config`](https://github.com/comparto/prettier-config) to retain prettier rules.

## [1.1.2](https://github.com/comparto/eslint-config/compare/v1.1.1...v1.1.2) (2020-06-26)


### Bug Fixes

* 🐛 missing `parserOptions.project` is now set properly ([2ac8679](https://github.com/comparto/eslint-config/commit/2ac8679d64f519bf56a6d8217948ce2de5b889fb)), closes [#27](https://github.com/comparto/eslint-config/issues/27)

## [1.1.1](https://github.com/comparto/eslint-config/compare/v1.1.0...v1.1.1) (2020-06-26)


### Bug Fixes

* 🐛 all typescript rules' definitions are now found ([547b0ca](https://github.com/comparto/eslint-config/commit/547b0ca01533482136407c30294ec9d724f69235)), closes [#24](https://github.com/comparto/eslint-config/issues/24)
* 🐛 eslint-plugin-jsx-a11y now has correct peerDependencies ([7590368](https://github.com/comparto/eslint-config/commit/759036873052dd85430ff27dabc5870fbb0bc170)), closes [#23](https://github.com/comparto/eslint-config/issues/23)

# [1.1.0](https://github.com/comparto/eslint-config/compare/v1.0.2...v1.1.0) (2020-06-24)


### Features

* 🎸 added import rules ([8e9c86e](https://github.com/comparto/eslint-config/commit/8e9c86e2c4df0e355461f79f2b7b66319afc2ef0)), closes [#14](https://github.com/comparto/eslint-config/issues/14)

## [1.0.2](https://github.com/comparto/eslint-config/compare/v1.0.1...v1.0.2) (2020-06-15)


### Bug Fixes

* 🐛 jest rules now contain environment globals ([5eabbc0](https://github.com/comparto/eslint-config/commit/5eabbc0bb3c99cf976a42a4f3f50487507121403)), closes [#16](https://github.com/comparto/eslint-config/issues/16)

## [1.0.1](https://github.com/comparto/eslint-config/compare/v1.0.0...v1.0.1) (2020-06-15)


### Bug Fixes

* 🐛 properly exposed jest rule set ([1860c17](https://github.com/comparto/eslint-config/commit/1860c17cfd9dfccb61daf671677020b3b1fa14ea)), closes [#11](https://github.com/comparto/eslint-config/issues/11)

# 1.0.0 (2020-06-15)


### Features

* 🎸 initial release ([5efcbc0](https://github.com/comparto/eslint-config/commit/5efcbc0940b622b77ed2da051fe4aa0a38e9e958))
