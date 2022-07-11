import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

import {
  DataProviderLogo,
  LogoGroup,
  Card,
  Heading,
  MetadataList,
  ExpandableList,
} from 'elements'
import { BaseLink as Link } from 'elements/link'
import { classNames } from 'utils'

const texts = {
  pdfAvailable: 'Get PDF',
  linkAvailable: 'Full text link',
  metadataOnly: 'No full text',
}

const PREFIX = 'work'

const labels = {
  author: 'Author',
  fieldOfStudy: 'Field of study',
  publicationDate: 'Publication date',
  publicationVenue: 'Publication venue',
  dataProviders: 'Data providers',
}

const formatDate = (date) => date?.toString()

const typeToVariant = (fullTextLink) => {
  let variant
  if (fullTextLink == null) variant = 'missing'
  else if (fullTextLink.includes('core')) variant = 'hosted'
  else variant = 'linked'
  return variant
}

const fullTextStatus = ({ title, fullTextLink } = {}) => {
  // A trick to detect if any data exists.
  // Prevents fake 'Full text is missing' when still loading.
  if (title == null && fullTextLink == null) return null
  let status

  if (fullTextLink == null) status = texts.metadataOnly
  else if (fullTextLink.includes('core')) status = texts.pdfAvailable
  else status = texts.linkAvailable

  return status
}

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
    dataProviders = [],
  } = {},
  ...htmlProps
}) => {
  const idFor = (scope) => `${id}-${scope}`
  return (
    <Card
      id={`${PREFIX}-${id}`}
      className={classNames
        .use(
          styles.container,
          styles[`full-text-${typeToVariant(fullTextLink)}`]
        )
        .join(className)}
      itemScope
      itemType="https://schema.org/ScholarlyArticle"
      {...htmlProps}
    >
      <header className={styles.header}>
        <Heading level="3" className={styles.title} itemProp="name">
          {metadataLink ? <Link href={metadataLink}>{title}</Link> : title}
        </Heading>
        <LogoGroup>
          {dataProviders.map((dataProvider) => (
            <DataProviderLogo
              key={dataProvider.name}
              imageSrc={dataProvider.logo}
              size="sm"
              alt={dataProvider.name}
              useDefault={!!dataProvider.logo}
            />
          ))}
        </LogoGroup>
      </header>

      <MetadataList className={styles.metadataList}>
        <MetadataList.Item id={idFor('author')} label={labels.author}>
          <ExpandableList aria-label={labels.author}>
            {author.map((a) => (
              <ExpandableList.Item
                key={a.name}
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                <a
                  href={`/search?q=author:(${a.name})`}
                  className={styles.link}
                >
                  <span itemProp="name">{a.name.replace(',', ' ')}</span>
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
          itemProp="datePublished"
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

      <figure className={classNames.use(styles.thumbnail)}>
        <Link href={fullTextLink}>
          <img src={thumbnailUrl} itemProp="image" alt="" loading="lazy" />
          <span className={styles.thumbnailCaption}>
            {fullTextStatus({ title, fullTextLink })}
          </span>
        </Link>
      </figure>

      <div className={styles.content} itemProp="abstract">
        {children}
      </div>

      <div className={styles.footnote}>
        {dataProviders.map(
          (dataProvider) =>
            dataProvider.name && (
              <div
                itemProp="publisher"
                itemScope
                itemType="https://schema.org/Organization"
                key={dataProvider.id}
                className={styles.dataProvider}
              >
                <Link
                  href={`//core.ac.uk/data-providers/${dataProvider.id}`}
                  className={styles.repositoryLink}
                >
                  <span itemProp="name">{dataProvider.name}</span>
                </Link>
              </div>
            )
        )}
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
    dataProvider: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        downloadUrl: PropTypes.string,
      })
    ),
  }),
}

export default SearchResult
