// modified from original to fix usage with rjs

// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/7f64eb12af25ea4a297dac0f6bab06f9e45bc9f7/fuse/index.d.ts
// declare module 'fuse.js' {
// Type definitions for Fuse.js 2.5.0
// Project: https://github.com/krisk/Fuse
// Definitions by: Greg Smith <https://github.com/smrq/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Fuse<T> {
	constructor(list: T[], options?: Fuse.Options<T>);
	search(pattern: string): T[];
}

declare namespace Fuse {
	interface SearchFnConstructor {
		new (pattern: string, options?: SearchOptions): SearchFn;
	}

	interface SearchFn {
		search(text: string): SearchResult;
	}

	interface SearchResult {
		readonly isMatch: boolean;
		readonly score: number;
	}

	interface SearchOptions {
		location?: number;
		distance?: number;
		threshold?: number;
		maxPatternLength?: number;
	}

	interface Options<T> {
		id?: string;
		caseSensitive?: boolean;
		include?: string[];
		shouldSort?: boolean;
		searchFn?: SearchFnConstructor;
		sortFn?: (a: {score: number}, b: {score: number}) => number;
		keys?: string[] | { name:string; weight:number} [];
		verbose?:boolean;
		tokenize?: boolean;
		tokenSeparator? : RegExp;
		matchAllTokens?: boolean;
		location?: number;
		distance?: number;
		threshold?: number;
		maxPatternLength?: number;
		includeScore?: boolean;
		getFn?: (obj: T, path: string) => string;
	}
}

// export = Fuse;
// }
