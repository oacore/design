### Loading state

```js
<SearchResult id="example-01" aria-busy="true">
  <p data-line-count="2"></p>
</SearchResult>
```


### Regular state

```js
<SearchResult
  id="example-02"
  data={{
    title: 'Semantometrics: Towards Fulltext-based Research Evaluation',
    author: [{ name: 'Drahomira Herrmannova' }, { name: 'Petr Knoth' }],
    publicationDate: '2016',
    fieldOfStudy: 'Computer science',
    thumbnailUrl: '//core.ac.uk/image/200196065/medium',
    metadataLink: '//core.ac.uk/display/200196065',
    fullTextLink: '//core.ac.uk/reader/200196065',
  }}
>
  Over the recent years, there has been a growing interest in developing new
  research evaluation methods that could go beyond the traditional
  citation-based metrics. This interest is motivated on one side by the wider
  availability or even emergence of new information evidencing research
  performance, such as article downloads, views and Twitter mentions, and on
  the other side by the continued frustrations and problems surrounding the
  application of purely citation-based metrics to evaluate research
  performance in practice. Semantometrics are a new class of research
  evaluation metrics which build on the premise that full-text is needed to
  assess the value of a publication. This paper reports on the analysis
  carried out with the aim to investigate the properties of the semantometric
  contribution measure [Knoth, 2014], which uses semantic similarity of
  publications to estimate research contribution, and provides a comparative
  study of the contribution measure with traditional bibliometric measures
  based on citation counting.
</SearchResult>
```
