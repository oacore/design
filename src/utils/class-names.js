import flattenClassList from 'classnames'

const useModule = (className, module) => {
  if (typeof className != 'string') return className

  return className
    .split(' ')
    .map(name =>
      Object.prototype.hasOwnProperty.call(module, name) ? module[name] : name
    )
    .join(' ')
}

class ClassNames {
  classList = []

  module = {}

  use(...classList) {
    this.classList.push(...classList)
    return this
  }

  withModule(module) {
    Object.assign(this.module, module)
    return this
  }

  toString() {
    return useModule(flattenClassList(this.classList), this.module)
  }
}

const use = (...args) => new ClassNames().use(...args)
const withModule = (...args) => new ClassNames().withModule(...args)

ClassNames.use = use
ClassNames.withModule = withModule

export default ClassNames
export { use, withModule }
