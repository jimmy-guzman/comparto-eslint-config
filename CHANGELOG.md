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
