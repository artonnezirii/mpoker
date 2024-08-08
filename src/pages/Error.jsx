
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Error() {
    return (
        <>
            <Header />
            <div className="w-100 vh-100 d-flex align-items-center justify-content-center">
                <h1 className="display-1 mb-0 text-danger fw-bold">Page Not Found</h1>
            </div>
            <Footer />
        </>
    )
}
