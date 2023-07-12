import cx from 'classnames'

export default function Button({
  value,
  doubleWidth,
  onClick,
}: {
  value: string
  doubleWidth?: boolean
  onClick: (val: string) => void
}) {
  return (
    <button
      className={cx(
        'text-white p-2 sm:p-4 rounded-md',
        'bg-vivid-cyan-blue hover:bg-vivid-cyan-blue/80',
        'drop-shadow-lg active:drop-shadow-sm',
        {
          ['col-span-2']: doubleWidth,
        }
      )}
      onClick={() => onClick(value)}
    >
      <span className="text-md sm:text-4xl font-bold text-white drop-shadow-lg shadow-black">
        {value}
      </span>
    </button>
  )
}
