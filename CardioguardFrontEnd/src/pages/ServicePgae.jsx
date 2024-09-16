import CallYourDoctor from "../components/CallYourDoctor";
import NavBar from "../components/NavBar";
import MyLocationComponent from "../components/MyLocation";
import HospitalLocations from "../components/HospitalLocations";
import CreateDietPlan from "../components/CreateDietPlan";
import GetAdvice from "../components/GetAdvice";
import Meditate from "../components/Meditate";

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar />
            <div className="container mx-auto p-3">
                <div className="flex items-stretch">
                    {/* 
                        - flex: Sets up a horizontal layout.
                        - items-stretch: Ensures that both components take up the same height.
                    */}
                    <div className="w-1/2 p-3">
                        <MyLocationComponent />
                    </div>

                    <div className="w-1/2 p-3">

                        <CallYourDoctor />
                    </div>
                </div>
            </div>
            <div>
                <HospitalLocations/>
            </div>
            <div className="container mx-auto p-3">
                <div className="flex items-stretch">
                    {/* 
                        - flex: Sets up a horizontal layout.
                        - items-stretch: Ensures that both components take up the same height.
                    */}
                    <div className="w-1/3 p-3">
                        <CreateDietPlan />
                    </div>

                    <div className="w-1/3 p-3">

                        <GetAdvice />
                    </div>
                    <div className="w-1/3 p-3">

                        <Meditate />
                    </div>
                </div>
            </div>
        </div>
    );
}
