import Navbar from '../components/Navbar'


const Advisor = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
                <h1 className="text-2xl font-bold">Advisor Page</h1>
                <p className="mt-4 text-gray-600">This is the advisor page.</p>
                <p className="mt-4 text-gray-600">Here you can find personalized advice and tips for managing your expenses.</p>
                <p className="mt-4 text-gray-600">Stay tuned for more features!</p>
            </div>
            
        </>
    )
}


export default Advisor;