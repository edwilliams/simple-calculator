import './css/style.css'

export const metadata = {
  title: 'Calculator',
  description: 'Simple calculator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
