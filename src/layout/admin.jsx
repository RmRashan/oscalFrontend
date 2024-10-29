import Router_Index from '../Routers/Router_Index';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Leftbar from '../components/Leftbar';

const Admin = () => {
 
    return (
            

            <div className='inline-flex w-full bg-white min-h-dvh'>
                <Leftbar open={open} />
                <div className='flex flex-col w-full md:w-[calc(100%-200px)] '>
                    <Navbar />
                    <div className='p-3 w-full'>
                        <Router_Index />

                    </div>
                    <Footer />
                </div>
            </div>
    );
}

export default Admin;
