/* eslint-disable import/export */

declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}

/*
 * To allow import html files as string
 */
declare module '*.html' {
  const content: object;
  export default content;
}
