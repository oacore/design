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

  from(module) {
    Object.assign(this.module, module)
    return this
  }

  /**
   * @deprecated
   */
  withModule(...args) {
    return this.from(...args)
  }

  join(className) {
    this.appendix = className
    return this
  }

  toString() {
    return [
      useModule(flattenClassList(this.classList), this.module),
      this.appendix,
    ]
      .filter(s => s)
      .join(' ')
  }
}

const use = (...args) => new ClassNames().use(...args)
const from = (...args) => new ClassNames().from(...args)

ClassNames.use = use
ClassNames.from = from
ClassNames.withModule = from

export default ClassNames
export { use, from, from as withModule }
