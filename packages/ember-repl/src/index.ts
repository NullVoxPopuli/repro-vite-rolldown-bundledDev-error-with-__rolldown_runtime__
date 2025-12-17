export const emberCompilationModules = {
  '@ember/template-compiler/runtime': () =>
    import('@ember/template-compiler/runtime'),
  'content-tag': () => import('content-tag'),
};
