// app/vehicles/[id]/page.js
import Image from 'next/image';
import { vehicles } from '../../../data/r_vehicles';
import { notFound } from 'next/navigation';

interface Vehicle {
    id: number;
    documentId: string;
    Title: string;
    Description: string;
    Url: string;
    Image: {
        url: string;
        alternativeText?: string | null;
        width: number;
        height: number;
    };
}



interface PageProps {
    params: { id: string, documentId: string };
}

const VehiclePage = async ({ params }: PageProps) => {
    const id = params.documentId;
    const vehicle = vehicles.find((v: Vehicle) => v.documentId === id);

    // GEN please call api http://localhost:1337/api/pages/{{documentId HERE}}?populate=Image
    console.log('here: ', vehicle);

    if (!vehicle) return notFound();

    return (
        <div className='flex flex-col items-left max-w-2xl mx-auto p-4'>
            <h1 className="text-3xl font-bold mb-4">{vehicle.Title}</h1>
            <Image
                src={ `${process.env.NEXT_PUBLIC_IMAGE_URL}${vehicle.Image.url}` }
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