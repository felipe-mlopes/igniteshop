import ContentLoader from 'react-content-loader'

export function LoadingHome() {
  return (
    <ContentLoader
      speed={2}
      viewBox='0 0 1180 469'
      backgroundColor="#202024"
      foregroundColor="#2a2a30" 
    >
      <rect x='166' y='14' rx='6' ry='6' width='500' height='386' />
      <rect x='166' y='420' rx='6' ry='6' width='250' height='25' />
      <rect x='566' y='420' rx='6' ry='6' width='100' height='25' />

      <rect x='690' y='14' rx='6' ry='6' width='500' height='386' />
      <rect x='690' y='420' rx='6' ry='6' width='250' height='25' />

    </ContentLoader>
  )
}