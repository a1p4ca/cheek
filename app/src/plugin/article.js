/**
  * Wrapper of article
  */
export default ({
    date = new Date(),
    url = '',
    imageUrl = '', // TODO set default image url
    title = ''
}) => ({
    date,
    url,
    imageUrl,
    title,
})
