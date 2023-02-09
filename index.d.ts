declare module 'recursive-readdir-sync' {

  /**
   * Gets recursive files list
   *
   * @param {string} filesPath From where get files array
   *
   * @return {string[]}
   */
  export default function (filesPath: string): string[];
  
}
