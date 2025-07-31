// app/vehicles/[id]/page.js
import Image from 'next/image';
import { vehicles } from '../../../data/r_vehicles';

const VehiclePage = ({ params } : { params: any }) => {
    const vehicle = vehicles.find(v => v.id === parseInt(params.id));

    if (!vehicle) {
        return <div>Vehicle not found</div>;
    }

    return (
        <div className='flex flex-col items-left max-w-2xl mx-auto p-4'>
            <h1 className="text-3xl font-bold mb-4">{vehicle.Title}</h1>
            <Image
                src={vehicle.Image.url}
                alt={vehicle.Image.alternativeText ? vehicle.Image.alternativeText: vehicle.Title}
                width={vehicle.Image.width}
                height={vehicle.Image.height}
                className="w-full h-auto mb-4"
            />
            <p className="mb-4">{vehicle.Description}</p>
            <a
                href={vehicle.Url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
            >
                Learn more
            </a>
        </div>
    );
};

export default VehiclePage;