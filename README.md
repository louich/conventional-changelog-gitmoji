#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage Status][coveralls-image]][coveralls-url]

> [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) [gitmoji](https://github.com/carloscuesta/gitmoji/) preset

**Issues with the convention itself should be reported on the Atom issue tracker.**

This convention is intended to extend the [conventional-changelog-atom](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-atom#readme)
by adding support for the entire [gitmoji library](https://gitmoji.carloscuesta.me/).

## Git Commit Messages

### Atom Convention

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally
* Consider starting the commit message with an applicable emoji

### [Gitmoji library](https://gitmoji.carloscuesta.me/)

* :art:`:art:`Improving structure / format of the code.
* :zap:`:zap:`Improving performance.
* :fire:`:fire:`Removing code or files.
* :bug:`:bug:`Fixing a bug.
* :ambulance:`:ambulance:`Critical hotfix.
* :sparkles:`:sparkles:`Introducing new features.
* :memo:`:memo:`Writing docs.
* :rocket:`:rocket:`Deploying stuff.
* :lipstick:`:lipstick:`Updating the UI and style files.
* :tada:`:tada:`Initial commit.
* :white_check_mark:`:white_check_mark:`Updating tests.
* :lock:`:lock:`Fixing security issues.
* :apple:`:apple:`Fixing something on macOS.
* :penguin:`:penguin:`Fixing something on Linux.
* :checkered_flag:`:checkered_flag:`Fixing something on Windows.
* :robot:`:robot:`Fixing something on Android.
* :green_apple:`:green_apple:`Fixing something on iOS.
* :bookmark:`:bookmark:`Releasing / Version tags.
* :rotating_light:`:rotating_light:`Removing linter warnings.
* :construction:`:construction:`Work in progress.
* :green_heart:`:green_heart:`Fixing CI Build.
* :arrow_down:`:arrow_down:`Downgrading dependencies.
* :arrow_up:`:arrow_up:`Upgrading dependencies.
* :pushpin:`:pushpin:`Pinning dependencies to specific versions.
* :construction_worker:`:construction_worker:`Adding CI build system.
* :chart_with_upwards_trend:`:chart_with_upwards_trend:`Adding analytics or tracking code.
* :recycle:`:recycle:`Refactoring code.
* :whale:`:whale:`Work about Docker.
* :heavy_plus_sign:`:heavy_plus_sign:`Adding a dependency.
* :heavy_minus_sign:`:heavy_minus_sign:`Removing a dependency.
* :wrench:`:wrench:`Changing configuration files.
* :globe_with_meridians:`:globe_with_meridians:`Internationalization and localization.
* :pencil2:`:pencil2:`Fixing typos.
* :hankey:`:hankey:`Writing bad code that needs to be improved.
* :rewind:`:rewind:`Reverting changes.
* :twisted_rightwards_arrows:`:twisted_rightwards_arrows:`Merging branches.
* :package:`:package:`Updating compiled files or packages.
* :alien:`:alien:`Updating code due to external API changes.
* :truck:`:truck:`Moving or renaming files.
* :page_facing_up:`:page_facing_up:`Adding or updating license.
* :boom:`:boom:`Introducing breaking changes.
* :bento:`:bento:`Adding or updating assets.
* :ok_hand:`:ok_hand:`Updating code due to code review changes.
* :wheelchair:`:wheelchair:`Improving accessibility.
* :bulb:`:bulb:`Documenting source code.
* :beers:`:beers:`Writing code drunkenly.
* :speech_balloon:`:speech_balloon:`Updating text and literals.
* :card_file_box:`:card_file_box:`Performing database related changes.
* :loud_sound:`:loud_sound:`Adding logs.
* :mute:`:mute:`Removing logs.
* :busts_in_silhouette:`:busts_in_silhouette:`Adding contributor(s).
* :children_crossing:`:children_crossing:`Improving user experience / usability.
* :building_construction:`:building_construction:`Making architectural changes.
* :iphone:`:iphone:`Working on responsive design.
* :clown_face:`:clown_face:`Mocking things.
* :egg:`:egg:`Adding an easter egg.
* :see_no_evil:`:see_no_evil:`Adding or updating a .gitignore file
* :camera_flash:`:camera_flash:`Adding or updating snapshots
* :alembic:`:alembic:`Experimenting new things
* :mag:`:mag:`Improving SEO
* :wheel_of_dharma:`:wheel_of_dharma:`Work about Kubernetes
* :label:`:label:`Adding or updating types (Flow, TypeScript)

## Determining the recommended bump

The following bump levels are applied in order of importance.

### major

At least one breaking change is introduce, therefore if a commit contains the emoji:
* :boom: `:boom:`

### minor

At least one new feature is introduce, therefore if a commit contains the emoji:
* :sparkles: `:sparkles:`

### patch

Only fixes are applied, where none of the above rules applies.


Based on [Atom convention](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#git-commit-messages) & [Gitmoji icon library](https://gitmoji.carloscuesta.me/)

[npm-image]: https://badge.fury.io/js/conventional-changelog-gitmoji.svg
[npm-url]: https://npmjs.org/package/conventional-changelog-gitmoji
[travis-image]: https://travis-ci.org/stevemao/conventional-changelog-gitmoji.svg?branch=master
[travis-url]: https://travis-ci.org/stevemao/conventional-changelog-gitmoji
[daviddm-image]: https://david-dm.org/stevemao/conventional-changelog-gitmoji.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/stevemao/conventional-changelog-gitmoji
[coveralls-image]: https://coveralls.io/repos/stevemao/conventional-changelog-gitmoji/badge.svg
[coveralls-url]: https://coveralls.io/r/stevemao/conventional-changelog-gitmoji