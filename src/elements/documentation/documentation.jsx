import React from 'react'
import ReactMarkdown from 'react-markdown'

import styles from './documentation.css'

import { classNames } from 'utils'

const Documentation = ({
  headerTitle,
  headerCaption,
  highlight,
  nav,
  docs,
}) => (
  <div className={styles.documentationWrapper}>
    <h2 className={styles.documentationHeader}>{headerTitle}</h2>
    {headerCaption}
    <div className={styles.placement}>
      {nav}
      <div className={styles.documentationInnerWrapper}>
        {docs?.map((item, index) => (
          <div key={item.id} className={styles.documentationItem} id={item.id}>
            <h3
              className={classNames.use(styles.documentationItemTitle, {
                [styles.highlighted]: highlight === index,
              })}
            >
              {item.title}
            </h3>
            <div className={styles.typeWrapper}>
              {item.membership.map((member) => (
                <span
                  className={classNames
                    .use(styles.membership)
                    .join(member.status ? styles.enabled : styles.disabled)}
                >
                  {member.name}
                </span>
              ))}
            </div>
            <ReactMarkdown>{item.descriptionAbout}</ReactMarkdown>
            {item?.images?.map((img) => (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                className={classNames.use(styles.image, {
                  [styles.logoBanner]: item.id === 'logo-banner',
                  [styles.logoPersonalised]: item.id === 'personalised-banner',
                })}
                src={img.file}
                alt="image"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Documentation
