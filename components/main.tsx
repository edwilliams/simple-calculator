import Button from '@/components/button'

export default function Main({
  equation,
  onClickButton,
}: {
  equation: string
  onClickButton: (val: string) => void
}) {
  return (
    <main className="p-8 flex flex-col max-w-3xl m-auto">
      <div className="bg-vivid-cyan-blue p-4 rounded-t-md">
        <div className="p-2 border-pale-cyan-blue border-8 rounded-md">
          <div
            data-testid="sum-display"
            className="bg-white text-right p-2 font-bold tracking-wider text-4xl rounded-md overflow-x-auto"
          >
            {equation}
          </div>
        </div>
      </div>

      <div className="p-2 bg-vivid-cyan-blue rounded-b-md">
        <div className="bg-pale-cyan-blue p-2 rounded-md">
          <div className="grid gap-4 grid-cols-4 grid-rows-4">
            <Button doubleWidth onClick={onClickButton} value="⌫" />
            <Button onClick={onClickButton} value="-/+" />
            <Button onClick={onClickButton} value="÷" />
            <Button onClick={onClickButton} value="7" />
            <Button onClick={onClickButton} value="8" />
            <Button onClick={onClickButton} value="9" />
            <Button onClick={onClickButton} value="x" />
            <Button onClick={onClickButton} value="4" />
            <Button onClick={onClickButton} value="5" />
            <Button onClick={onClickButton} value="6" />
            <Button onClick={onClickButton} value="-" />
            <Button onClick={onClickButton} value="1" />
            <Button onClick={onClickButton} value="2" />
            <Button onClick={onClickButton} value="3" />
            <Button onClick={onClickButton} value="+" />
            <Button onClick={onClickButton} value="0" />
            <Button onClick={onClickButton} value="." />
            <Button doubleWidth onClick={onClickButton} value="=" />
          </div>
        </div>
      </div>
    </main>
  )
}
