import ContentLoader from 'react-content-loader'

export function LoadingProduct() {
  return (
    <ContentLoader
      speed={2}
      viewBox='0 0 1180 469'
      backgroundColor="#202024"
      foregroundColor="#2a2a30" 
    >
      <rect x='156' y='54' rx='8' ry='8' width='376' height='386' />
      <rect x='626' y='54' rx='8' ry='8' width='400' height='35' />
      <rect x='626' y='114' rx='8' ry='8' width='120' height='35' />
      <rect x='626' y='174' rx='8' ry='8' width='400' height='150' />
      <rect x='626' y='394' rx='8' ry='8' width='400' height='45' />

    </ContentLoader>
  )
}