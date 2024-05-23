type Props = {
  children: React.ReactNode
  centerContent?: boolean
}

const Card = ({ children, centerContent = false }: Props) => {
  let columnStyle = 'flex flex-col'
  if (centerContent) columnStyle += ' items-center'

  return (
    <div className="p-4 bg-gray-200 my-2 rounded min-w-64">
      <div className={columnStyle}>{children}</div>
    </div>
  )
}

export default Card
