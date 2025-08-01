'use client';

import React from 'react';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { useVehicles } from '@/app/context/VehicleContext';
import { Vehicle } from '@/app/interface/vehicle.interface';

const VehiclePage = () => {
    const { id } = useParams() as { id: string };
    const { vehicles, loading } = useVehicles();

    // Find the vehicle by ID
    const vehicle = (vehicles as Vehicle[]).find(v => v.documentId === id);

    if (loading) return <div>Loading...</div>;
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