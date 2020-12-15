import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

import { Card, Heading, Link, MetadataList, ExpandableList } from 'elements'
import { classNames } from 'utils'

const texts = {
  pdfAvailable: 'Get PDF',
  linkAvailable: 'Access PDF',
  metadataOnly: 'No full text',
}

const PREFIX = 'work'

const labels = {
  author: 'Author',
  fieldOfStudy: 'Field of study',
  publicationDate: 'Publication date',
  publicationVenue: 'Publication venue',
}

const formatDate = (date) => date?.toString()

const SearchResult = ({
  children,
  id,
  className,
  data: {
    title,
    author = [],
    publicationDate,
    publicationVenue,
    fieldOfStudy,
    metadataLink,
    fullTextLink,
    thumbnailUrl,
  } = {},
  ...htmlProps
}) => {
  const idFor = (scope) => `${id}-${scope}`
  return (
    <Card
      id={`${PREFIX}-${id}`}
      className={classNames.use(styles.container).join(className)}
      itemScope
      itemType="https://schema.org/ScholarlyArticle"
      {...htmlProps}
    >
      <Heading level="3" className={styles.title} itemProp="name">
        {metadataLink ? <Link href={metadataLink}>{title}</Link> : title}
      </Heading>

      <MetadataList>
        <MetadataList.Item id={idFor('author')} label={labels.author}>
          <ExpandableList aria-label={labels.author}>
            {author.map((a) => (
              <ExpandableList.Item
                key={a.name}
                itemProp="author"
                itemScope=""
                itemType="https://schema.org/Person"
              >
                <a
                  href={`https://core.ac.uk/search?q=author:(${a.name})`}
                  className={styles.link}
                >
                  {a.name.replace(',', ' ')}
                </a>
              </ExpandableList.Item>
            ))}
          </ExpandableList>
        </MetadataList.Item>

        <MetadataList.Item id={idFor('venue')} label={labels.publicationVenue}>
          {publicationVenue}
        </MetadataList.Item>

        <MetadataList.Item
          id={idFor('publication-date')}
          label={labels.publicationDate}
          itemProp="dataPublished"
        >
          {formatDate(publicationDate)}
        </MetadataList.Item>

        <MetadataList.Item
          id={idFor('field')}
          label={labels.fieldOfStudy}
          itemProp="about"
        >
          {fieldOfStudy}
        </MetadataList.Item>
      </MetadataList>

      <figure className={styles.thumbnail}>
        {fullTextLink != null ? (
          <Link href={fullTextLink}>
            <img src={thumbnailUrl} alt="" loading="lazy" />
            <span className={styles.thumbnailCaption}>
              {texts.pdfAvailable}
            </span>
          </Link>
        ) : (
          <>
            <img src={thumbnailUrl} alt="" loading="lazy" />
            <span
              className={classNames.use(
                styles.thumbnailCaption,
                styles.thumbnailCaptionEmpty
              )}
            >
              {texts.metadataOnly}
            </span>
          </>
        )}
      </figure>

      <div className={styles.content} itemProp="abstract">
        {children}
      </div>
    </Card>
  )
}

SearchResult.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    author: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    publicationDate: PropTypes.string,
    publicationVenue: PropTypes.string,
    metadataLink: PropTypes.string,
    fullTextLink: PropTypes.string,
    thumbnailUrl: PropTypes.string,
  }),
}

export default SearchResult
