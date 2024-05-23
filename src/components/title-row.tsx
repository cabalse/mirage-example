type Props = {
  children: React.ReactNode
  title: string
}

const TitleRow = ({ children, title }: Props) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="text-lg font-bold">{title}</div>
      {children ? <div className="ml-3">{children}</div> : null}
    </div>
  )
}

export default TitleRow
