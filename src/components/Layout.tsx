import { Toaster } from 'react-hot-toast'
import Header from './Header'

const Layout = ({ children }) => {
	return (
		<div className="bg-black text-white min-h-screen">
			<Header />
			<main className="max-w-2xl mx-auto space-y-8">{children}</main>
			<Toaster position="bottom-right" />
		</div>
	)
}

export default Layout