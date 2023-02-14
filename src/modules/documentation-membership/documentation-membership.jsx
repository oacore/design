import React from 'react'
import ReactMarkdown from 'react-markdown'

import styles from './styles.css'
// import { classNames } from '../../utils'
import { classNames } from '../../../lib/utils'

const DocumentationMembership = ({
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
        {docs?.items?.map((item, index) => (
          <div key={item.id} className={styles.documentationItem} id={item.id}>
            <h3
              className={classNames.use(styles.documentationItemTitle, {
                [styles.highlighted]: highlight === index,
              })}
            >
              {item.title}
            </h3>
            <div className={styles.typeWrapper}>
              {Object.entries(item?.membershipTypes).map((value) => (
                <span
                  key={item.id + value[0] + value[1]}
                  className={classNames
                    .use(styles.membership)
                    .join(
                      value[1] === 'Yes' ? styles.enabled : styles.disabled
                    )}
                >
                  {value[0]}
                </span>
              ))}
            </div>
            <ReactMarkdown>{item.descriptionAbout}</ReactMarkdown>
            {item?.images?.map((img, i) => (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                {/* eslint-disable-next-line react/no-array-index-key */}
                key={item.id + i}
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

export default DocumentationMembership
