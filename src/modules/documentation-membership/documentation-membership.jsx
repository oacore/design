import React from 'react'
import ReactMarkdown from 'react-markdown'

import styles from './styles.css'
import { classNames } from '../../utils'

const ASSETS_BASE_URL = 'https://oacore.github.io/content/'

const DocumentationMembership = ({
  headerTitle,
  headerCaption,
  highlight,
  nav,
  docs,
  imageSource,
}) => (
  <div className={styles.documentationWrapper}>
    <h2 className={styles.documentationHeader}>{headerTitle}</h2>
    {headerCaption}
    <div
      className={classNames.use(styles.placement, {
        [styles.placementHeight]: imageSource,
      })}
    >
      {nav}
      <div className={styles.documentationInnerWrapper}>
        {docs?.map((item, index) => (
          <>
            {item.divider && <div className={styles.divider} />}
            <div
              key={item.id}
              className={styles.documentationItem}
              id={item.id}
            >
              <h3
                className={classNames.use(styles.documentationItemTitle, {
                  [styles.highlighted]: highlight === index,
                })}
              >
                {item.title}
              </h3>
              {item.membershipTypes && (
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
              )}
              <ReactMarkdown linkTarget="_blank" className={styles.test}>
                {item.descriptionAbout}
              </ReactMarkdown>
              <div>
                {item?.images?.map((img, i) => (
                  <div className={styles.cardWrapper}>
                    <div
                      className={classNames.use({
                        [styles.imgWrapper]: img.source,
                        [styles.imgSpread]: imageSource,
                      })}
                    >
                      {/* eslint-disable-next-line max-len */}
                      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                      <img
                        className={classNames.use(styles.image, {
                          [styles.logoBanner]: item.id === 'logo-banner',
                          [styles.logoPersonalised]:
                            item.id === 'personalised-banner',
                          [styles.badgeImage]: img.source,
                          [styles.badgeImageHeight]:
                            img.source?.includes('square'),
                        })}
                        src={
                          imageSource ? ASSETS_BASE_URL + img.file : img.file
                        }
                        alt="image"
                        // eslint-disable-next-line react/no-array-index-key
                        key={item.id + i}
                      />
                    </div>
                    {img.source && (
                      <div className={styles.textAlignment}>
                        <span className={styles.text}>{img.source}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {item?.subTitle && (
                <ReactMarkdown className={styles.documentationSubTitle}>
                  {item?.subTitle}
                </ReactMarkdown>
              )}
              {item?.subDescription && (
                <ReactMarkdown
                  className={classNames.use(
                    styles.documentationSubDescription,
                    {
                      [styles.subBorder]: item.border,
                    }
                  )}
                >
                  {item?.subDescription}
                </ReactMarkdown>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  </div>
)

export default DocumentationMembership
