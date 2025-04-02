import Navbar from "../components/Navbar";  


const Report = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-2xl font-bold">Report Page</h1>
                <p className="mt-4 text-gray-600">This is the report page.</p>
            </div>
        </>
    );
}
export default Report;