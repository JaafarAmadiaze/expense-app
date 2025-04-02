import Table from "../components/Table";
import Navbar from "../components/Navbar";

const Expenses = () => {
    return (
        <>
        <Navbar />
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold">Expenses Page</h1>
            <p className="mt-4 text-gray-600">This is the expenses page.</p>
            <Table />
        </div>
        </>
    );
    }
    export default Expenses;
