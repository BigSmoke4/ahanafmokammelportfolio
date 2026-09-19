/// <reference types="vite/client" />

interface CSSModuleClasses {
  readonly [key: string]: string
}

declare module '*.css' {
  const classes: CSSModuleClasses
  export default classes
}

declare module '*.scss' {
  const classes: CSSModuleClasses
  export default classes
}

declare module '*.sass' {
  const classes: CSSModuleClasses
  export default classes
}
