/**
 * Schema for defining an emoji
 */
declare interface EmojiDefinition {
  /**
   * human-friendly name of this emoji pack
   */
  name: string;

  /**
   * The ID of this emoji pack.
   * Used in the CSS classname, etc
   */
  id: string;

  /**
   * Legal attribution for using these emoji, if applicable
   */
  attribution?: string;

  /**
   * License for these emoji
   */
  license?: string;

  /**
   * The mode of this emoji pack.
   * `images` for individual image files.
   * `sprite` for a single image sprite file.
   * `font` for an emoji font.
   */
  mode: 'images' | 'sprite' | 'font';

  /**
   * **`images` mode** options
   */
  images?: {
    /** Path to the directory where the image files are located */
    directory: string;
  };
  /**
   * **`sprite` mode** options
   */
  sprite?: {
    /** Path to the sprite image file */
    file: string;
    /** CSS `background-size` */
    backgroundSize: string;
  };
  /**
   * **`font` mode** options
   */
  font?: {
    /** Path to the emoji font `.eot` file (for old IE support) */
    eot?: string;
    /** Path to the emoji font `.ttf` file */
    ttf?: string;
    /** Path to the emoji font `.woff` file */
    woff?: string;
    /** Path to the emoji font `.woff2` file */
    woff2?: string;
    /** Path to the emoji font `.svg` file
     * (for Apple support, end this with the `#fontname` convention) */
    svg?: string;

    /** CSS `font-family` name */
    family: string;
  };

  /**
   * A map of emoji names to one of the following
   */
  dictionary: {
    [name: string]: {
      /** alternative names for this emoji */
      aliases?: string[],
      /** common ascii representations for this emoji */
      ascii?: string[],
      /**
       * **`images` mode** image file name [`grinning-face.png`]
       */
      image?: string,
      /**
       * **`sprite` mode** CSS `background-position`
       */
      backgroundPosition?: string,
      /** unicode text character */
      character: string,
      /**
       * categories this emoji fits in (default: `['other']`)
       *
       * known categories:
       * `'symbols'`,
       * `'objects'`,
       * `'nature'`,
       * `'people'`,
       * `'food'`,
       * `'travel'`,
       * `'activity'`,
       * `'flags'`,
       * `'regional'`,
       * `'modifier'`,
       * `'other'`
       *
       * if adding other categories, add translations for them like
       * `"categories.people": "People"` under `emoji.json`
       */
      categories?: string[],
    },
  };
}

declare type AsyncEmojiDefinition = (cb: NodeBack<EmojiDefinition>) => void;

declare type NodeBack<T = any> = (err?: Error, data?: T) => void;

declare interface StoredEmoji {
  name: string;
  character: string;
  image: string;
  pack: string;
}

declare interface MetaStore {
  /** table of all emoji */
  table: {
    [name: string]: StoredEmoji,
  };

  /** map of all aliases to the base name */
  aliases: {
    [alias: string]: string,
  };

  /** map of ascii to base names */
  ascii: {
    [str: string]: string,
  };

  /** list of emoji names in each category */
  categories: {
    [category: string]: string[],
  };

  /** storing pack information for dialog */
  packs: {
    name: string,
    id: string,
    attribution: string,
    license: string,
  }[];
}

declare module NodeJS  {
  export interface Global {
    env: 'development' | 'production'
  }
}