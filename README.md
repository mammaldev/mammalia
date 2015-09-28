# mammalia

Pick a pseudo-random mammal name from a list of all known mammals. To be
specific, that is all members of the taxonomic class Mammalia. The data is
sourced from [Mammal Species of the World][msw] (Wilson & Reeder, 2005).

## Installation

Mammalia depends on [Node.js][node]. You can install Mammalia from npm:

    $ npm install -g mammalia

Or build from source:

    $ git clone git@github.com:mammaldev/mammalia
    $ cd mammalia
    $ npm install
    $ npm link

## Usage

Mammalia exposes a simple command line interface and can be run with default
options by simply typing `mammalia`.

### Examples

    $ mammalia
    Twisted-toothed Giant Hutia

    $ mammalia -w 2
    Rusty Pipistrelle

    $ mammalia -w 1
    Pacarana

### Options

| Option | Description                                           | Default |
| ------ | ----------------------------------------------------- | ------- |
| `-w`   | The maximum number of words in the name of the mammal | 5       |

## Why?

Because we are called [Mammal][mammal] we like to use the names of various
mammals for some of our side projects and code names.

[msw]: http://www.departments.bucknell.edu/biology/resources/msw3/
[node]: https://nodejs.org/en/
[mammal]: http://mammal.io
