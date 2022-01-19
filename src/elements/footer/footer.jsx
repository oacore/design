import React from 'react'

import styles from './footer.css'

import { Logo, Icon, Link } from 'elements'
import { classNames } from 'utils'

const MenuListItem = ({
  children,
  href,
  className = '',
  tag: Tag = 'li',
  ...restProps
}) => (
  <Tag {...restProps} className={classNames.use(styles.item).join(className)}>
    <a href={href}>{children}</a>
  </Tag>
)

const MenuList = ({ title, children, className = '' }) => {
  const items = React.Children.map(children, (child) => {
    if (child.type !== MenuListItem) return null
    return React.cloneElement(child, {
      key: child.props.href,
      tag: child.props.tag ?? 'li',
    })
  })

  return (
    <div>
      <h6 className={styles.menuTitle}>{title}</h6>
      <ul className={`${styles.list} ${className}`}>{items}</ul>
    </div>
  )
}

const Card = () => (
  <div className={styles.card}>
    <div className={styles.cardContent}>
      <h6 className={styles.cardTitle}>Writing about CORE?</h6>
      <p className={styles.cardDesc}>
        Discover our{' '}
        <Link href="/about/research-outputs">research outputs</Link> and cite
        our work.
      </p>{' '}
    </div>
    <Icon src="#writing" alt="writing" className={styles.cardImg} />
  </div>
)

const Footer = ({ className }) => (
  <footer className={classNames.use(styles.footer).join(className)} id="footer">
    <div className={styles.container}>
      <div className={classNames.use(styles.sectionLogos)}>
        <div className={styles.logos}>
          <Link href="https://www.jisc.ac.uk">
            <Icon
              src="#jisc-logo"
              alt="Jisc logo"
              className={styles.logoIcon}
            />
          </Link>
          <Link href="https://www.open.ac.uk">
            <Icon
              src="#ou-logo"
              alt="Ou logo"
              className={(styles.logoIcon, styles.logoIconOu)}
            />
          </Link>
        </div>
        <p className={styles.text}>
          CORE is not-for-profit service delivered by the Open University and
          Jisc.
        </p>
      </div>
      <menu className={classNames.use(styles.menu)}>
        <MenuList title="Product">
          <MenuList.Item href="/services">Services</MenuList.Item>
          <MenuList.Item href="/benefits">Data providers</MenuList.Item>
          <MenuList.Item href="/community/research">Communities</MenuList.Item>
          <MenuList.Item href="/terms">Terms</MenuList.Item>
        </MenuList>
        <MenuList title="Organisation">
          <MenuList.Item href="/about">About us</MenuList.Item>
          <MenuList.Item href="/about#our-mission">Mission</MenuList.Item>
          <MenuList.Item href="/about#team">Team</MenuList.Item>
          <MenuList.Item href="https://blog.core.ac.uk/">Blog</MenuList.Item>
        </MenuList>
        <MenuList title="Support">
          <MenuList.Item href="/faq">FAQs</MenuList.Item>
          <MenuList.Item href="/about#contact">Contact us</MenuList.Item>
        </MenuList>
      </menu>
      <div className={classNames.use(styles.section, styles.sectionCard)}>
        <Card />
      </div>
    </div>
    <div className={styles.bottom}>
      <Link href="/" className={styles.logoLink}>
        <Logo className={styles.logo} />
      </Link>
      <Link className={styles.bottomLink} href="/accessability">
        Accessability
      </Link>
      <Link className={styles.bottomLink} href="/cookies">
        Cookies
      </Link>
      <Link className={styles.bottomLink} href="/privacy">
        Privacy
      </Link>
    </div>
  </footer>
)
MenuList.Item = MenuListItem
export default Footer
