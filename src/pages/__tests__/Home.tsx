import { screen } from '@testing-library/react'
import Home from 'pages/Home'
import renderWithProviders from 'testUtils'

describe('<Home />', () => {
	it('renders', async () => {
		renderWithProviders(<Home />)

		expect(screen.getByText('Hello World!')).toBeInTheDocument()
	})
})
