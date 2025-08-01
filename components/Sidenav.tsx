"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useVehicles } from '@/app/context/VehicleContext';

type Vehicle = {
    id: number;
    Title: string;
    documentId: string;
    Image: {
        formats: {
            thumbnail: {
                url: string;
                name: string;
                hash: string;
                ext: string;
                width: number;
                height: number;
            };
        };
        alternativeText?: string;
    };
};

const SideNav: React.FC = () => {
    const { vehicles, loading, error } = useVehicles();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching vehicles: {String(error)}</div>;


    return vehicles.length > 0 && (
        <ul className='space-y-1 pt-4 pb-4'>
            {vehicles.map((vehicle: Vehicle) => (
            <li key={vehicle.id} className="mb-2">
                <Link
                href={`/vehicles/${vehicle.documentId}`}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                >
                <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${vehicle.Image.formats.thumbnail.url}`}
                    /*src={vehicle.Image.formats.thumbnail.url}*/
                    alt={vehicle.Image.alternativeText ? vehicle.Image.alternativeText : vehicle.Title}
                    width={vehicle.Image.formats.thumbnail.width}
                    height={vehicle.Image.formats.thumbnail.height}
                    className="inline-block w-6 h-6 mr-2"
                />
                {vehicle.Title}
                </Link>
            </li>
            ))}
        </ul>
    )
}

export default SideNav;